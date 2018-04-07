import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AppServiceService {

  private readonly URL1 = "http://localhost:9505/noble-markets-realtime-order-book"
  private readonly URL2 = "http://localhost:9505/noble-markets-order-book-snapshot"

  constructor(
    protected httpClient: HttpClient,
  ) {}

  public getMyOrderBook() {
    return this.httpClient.get(`${this.URL1}`);
  }

  public getCustomOrderBook(price, exchange, pairname) {
    //console.log('here');
    var url = this.URL2 + "?price=" + price + "&exchange=" + exchange + "&pairname=" + pairname
    //console.log(url);
    return this.httpClient.get(url);
  }


}
