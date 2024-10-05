import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { MenuService } from './services/Menu.service';
import { OrderService } from './services/order.service';

@NgModule({
    declarations: [
        AppComponent,
        MenuComponent,
        OrderHistoryComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([]),
    ],
    providers: [MenuService, OrderService],
    bootstrap: [AppComponent]
})
export class AppModule {}
