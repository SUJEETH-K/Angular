// payment.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-payment',
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  productName: string = '';
  productImage: string = '';
  productPrice: number = 0;
  productRating: string = '';
  quantity: number = 1;
  totalPrice: number = 0;

  private basePrice: number = 0;

  increment(): void {
    this.quantity++;
    this.calculateTotalPrice();
  }

  decrement(): void {
    if (this.quantity > 1) {
      this.quantity--;
      this.calculateTotalPrice();
    }
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve product details from URL queryParams
    this.route.queryParams.subscribe(params => {
      console.log('Query Params:', params);
      this.productName = params['name'];
      this.productImage = params['image'];
      this.productPrice = params['price']; // example price
      this.productRating = params['rate']; // example rating
      this.basePrice = +params['price'] || 0;
      this.productPrice = this.basePrice;
      this.calculateTotalPrice();
    });
  }

  calculateTotalPrice(): void {
    this.totalPrice = this.productPrice * this.quantity;
  }
}