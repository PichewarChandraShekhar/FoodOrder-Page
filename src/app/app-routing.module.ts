import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component'; // Assuming you have an OrderComponent
import { OrderHistoryComponent } from './order-history/order-history.component'; // Assuming you have an OrderHistoryComponent

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'order', component: OrderComponent },
  { path: 'order-history', component: OrderHistoryComponent },
  { path: '', redirectTo: '/menu', pathMatch: 'full' }, // Redirect to menu on load
  { path: '**', redirectTo: '/menu' } // Redirect any unknown routes to menu
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
