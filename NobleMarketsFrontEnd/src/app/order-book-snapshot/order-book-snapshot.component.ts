import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AppServiceService} from '../app-service.service';

@Component({
  selector: 'app-order-book-snapshot',
  templateUrl: './order-book-snapshot.component.html',
  styleUrls: ['./order-book-snapshot.component.css']
})
export class OrderBookSnapshotComponent implements OnInit {
  rForm: FormGroup;
  post:any;                     // A property for our submitted form
  data: any = [];
  price:string = '0';
  default: string = '';
  titleAlert:string = 'This field is required';
  exchange: string = 'Both';
  pairname: string = 'Both';
  exchangeList: string[] = ['GDax', 'Bitfinex', 'Both'];
  pairnameList: string[] = ['BTC-USD', 'ETH-USD', 'Both'];

  constructor(private fb:FormBuilder,private appService: AppServiceService) {
    this.rForm = fb.group({
      'price': [null],
      'exchange' : [this.exchangeList],
      'pairname' : [this.pairnameList]
    });
    setInterval(() => {

      this.appService.getCustomOrderBook(this.price, this.exchange, this.pairname).subscribe(data => this.data = data);
    }, 400);
  }

  ngOnInit() {

  }

  addPost(post) {
    console.log(post);
    this.price = post.price;
    this.exchange = post.exchange;
    this.pairname = post.pairname;
    console.log(this.price + " " + this.exchange + " " + this.pairname);
    //this.appService.getCustomOrderBook(this.price, this.exchange, this.pairname).subscribe(data => this.data = data);;
  }

}
