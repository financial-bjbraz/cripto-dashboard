import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../shared';


@Injectable()
export class DevicesService {
  public DEVICES_API = SERVER_API_URL + 'devices';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.DEVICES_API);
  }

  get(id: string) {
    console.log(id);
    return this.http.get(this.DEVICES_API + '/' + id);
  }

  save(car: any): Observable<any> {
    let result: Observable<Object>;
    if (car['href']) {
      result = this.http.put(car.href, car);
    } else {
      result = this.http.post(this.DEVICES_API, car);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
