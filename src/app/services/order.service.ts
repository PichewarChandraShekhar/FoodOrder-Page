// src/app/services/order.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dish } from '../models/dish.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'https://api.jsonbin.io/v3/b/66faa41facd3cb34a88ed968'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getOrderHistory(): Observable<Dish[]> {
    return this.http.get<Dish[]>(`${this.apiUrl}/order-history`); // Adjust endpoint accordingly
  }
}
