import { Routes } from '@angular/router';
import {OrderBookSnapshotComponent} from "./order-book-snapshot/order-book-snapshot.component";
import {RealTimeOrderBookComponent} from "./real-time-order-book/real-time-order-book.component";

export const routes: Routes = [
  { path: '', component: RealTimeOrderBookComponent },
  { path: 'snapShot', component: OrderBookSnapshotComponent }
];



// noble-markets-order-book-snapshot
// noble-markets-realtime-order-book
