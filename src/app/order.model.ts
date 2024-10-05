export interface Order {
    tableNumber: number;
    contactNumber?: string;  // Optional field
    date: string;
    time: string;
    dishes: { name: string, quantity: number }[];
  }
  