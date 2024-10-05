// src/app/services/Menu.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Dish } from '../models/dish.model'; // Adjust the import path as necessary

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private apiUrl = 'https://api.jsonbin.io/v3/b/66faa41facd3cb34a88ed968'; // Replace with your actual API URL
  private storageKey = 'dishes';

  constructor(private http: HttpClient) {}

  fetchDishes(): Observable<Dish[]> {
    const storedDishes = localStorage.getItem(this.storageKey);
    if (storedDishes) {
      return new Observable((observer) => {
        observer.next(JSON.parse(storedDishes));
        observer.complete();
      });
    } else {
      return this.http.get<Dish[]>(this.apiUrl).pipe(
        tap((dishes) => {
          localStorage.setItem(this.storageKey, JSON.stringify(dishes));
        })
      );
    }
  }

  clearLocalStorage() {
    localStorage.removeItem(this.storageKey);
  }
}
