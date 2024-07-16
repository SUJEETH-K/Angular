const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { MongoClient } = require('mongodb');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

const uri = 'mongodb://127.0.0.1:27017/';
const dbName = 'shopping';
let db;

// Connect to MongoDB
MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    db = client.db(dbName);
    console.log('MongoDB connected');
  })
  .catch(err => console.log(err));

// Register route
app.post('/api/register', async (req, res) => {
  const { email, phone, password } = req.body;

  try {
    const userDetails = db.collection('userDetails');
    
    // Check if the email already exists
    const existingUser = await userDetails.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { email, phone, password: hashedPassword };
    await userDetails.insertOne(user);
    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Login route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const userDetails = db.collection('userDetails');
    const user = await userDetails.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ email: user.email }, 'secret', { expiresIn: '1h' });
      res.status(200).json({ token });
    } else {
      res.status(400).send('Invalid credentials');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
