import { Component } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  orderDetails = {
    tableNumber: '',
    contactNumber: '',
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString()
  };

  constructor(private orderService: OrderService) {}

  placeOrder() {
    if (this.orderService.getCurrentOrder().length > 0) {
      const finalOrder = {
        ...this.orderDetails,
        dishes: this.orderService.getCurrentOrder()
      };
      console.log('Order placed:', finalOrder);
      this.orderService.clearOrder(); // Clear the current order after placing it
    } else {
      console.log('No items to place order.');
    }
  }
}
