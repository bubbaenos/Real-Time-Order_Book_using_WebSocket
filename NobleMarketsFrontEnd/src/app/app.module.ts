import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import {AppServiceService} from "./app-service.service";
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes} from "./app.routes";
import { OrderBookSnapshotComponent } from './order-book-snapshot/order-book-snapshot.component';
import { RealTimeOrderBookComponent } from './real-time-order-book/real-time-order-book.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderBookSnapshotComponent,
    RealTimeOrderBookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
