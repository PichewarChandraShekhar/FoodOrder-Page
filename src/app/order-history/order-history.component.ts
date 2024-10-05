// src/app/order-history/order-history.component.ts
import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Dish } from '../models/dish.model';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orderHistory: Dish[] = []; // Initialize to avoid undefined errors

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrderHistory().subscribe(
      (history: Dish[]) => { // Define type for history
        this.orderHistory = history;
      },
      (error) => {
        console.error('Error fetching order history:', error);
      }
    );
  }
}
