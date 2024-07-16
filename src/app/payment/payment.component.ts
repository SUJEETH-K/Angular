// payment.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  productName: string = '';
  productImage: string = '';
  productPrice: string = '';
  productRating: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve product details from URL queryParams
    this.route.queryParams.subscribe(params => {
      console.log('Query Params:', params);
      this.productName = params['name'];
      this.productImage = params['image'];
      this.productPrice = params['price']; // example price
      this.productRating = params['rate']; // example rating
    });
  }
}