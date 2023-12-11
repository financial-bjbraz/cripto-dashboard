import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../shared';


@Injectable()
export class OrdersService {
  public ORDERS_API = SERVER_API_URL + 'orders';
  public INVENTORY_API = SERVER_API_URL + 'inventory';
  public VALUES_API = SERVER_API_URL + 'values';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.ORDERS_API);
  }

  getAllInventory(): Observable<any> {
    return this.http.get(this.INVENTORY_API);
  }

  getAllValues(): Observable<any> {
    return this.http.get(this.VALUES_API);
  }

  get(id: string) {
    console.log(id);
    return this.http.get(this.ORDERS_API + '/' + id);
  }

  save(car: any): Observable<any> {
    let result: Observable<Object>;
    if (car['href']) {
      result = this.http.put(car.href, car);
    } else {
      result = this.http.post(this.ORDERS_API, car);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
