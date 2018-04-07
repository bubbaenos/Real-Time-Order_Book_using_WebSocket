import { Component, OnInit } from '@angular/core';
import {AppServiceService} from "../app-service.service";

@Component({
  selector: 'app-real-time-order-book',
  templateUrl: './real-time-order-book.component.html',
  styleUrls: ['./real-time-order-book.component.css']
})
export class RealTimeOrderBookComponent implements OnInit {
  data: any = [];

  constructor(private appService: AppServiceService) {}

  ngOnInit() {
    setInterval(() => {

      this.appService.getMyOrderBook().subscribe(data => this.data = data);
    }, 400);
  }

}
