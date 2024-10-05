// src/app/models/dish.model.ts
export interface Dish {
  id: number;           // Unique identifier for the dish
  name: string;         // Name of the dish
  description: string;  // Description of the dish
  price: number;        // Price of the dish
  quantity?: number;    // Quantity of the dish (make sure this is included)
}
