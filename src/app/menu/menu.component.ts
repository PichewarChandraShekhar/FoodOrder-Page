// src/app/components/menu/menu.component.ts
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/Menu.service'; 
import { Dish } from '../models/dish.model'; 
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  dishes: Dish[] = []; // Initialize dishes array

  constructor(private menuService: MenuService) {} // Use lowercase for the service name

  ngOnInit() {
    this.loadDishes(); // Call loadDishes on initialization
  }

  loadDishes() {
    this.menuService.fetchDishes().subscribe((dishes: Dish[]) => { // Specify the type
      this.dishes = dishes; // Assign fetched dishes to the component's dishes property
    });
  }
}
