import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  imports: [FormsModule,CommonModule,RouterLink,RouterOutlet],
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  selectedPaymentMethod: string = '';
  upiId: string = '';
  cardNumber: string = '';
  cardName: string = '';
  expiryDate: string = '';
  cvv: string = '';

  payNow() {
    if (this.selectedPaymentMethod === 'UPI') {
      console.log('Processing UPI Payment for UPI ID:', this.upiId);
      // Implement UPI payment processing logic here
    } else if (this.selectedPaymentMethod === 'Card') {
      console.log('Processing Card Payment for Card Number:', this.cardNumber);
      // Implement card payment processing logic here
    } else {
      console.log('No payment method selected');
    }
  }
}
