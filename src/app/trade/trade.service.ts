import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../shared';
import { Trade } from './trade.model';
import { map } from 'rxjs/operators';

export type EntityResponseType = HttpResponse<Trade>;

@Injectable()
export class TradeService {
  private resourceUrl =  SERVER_API_URL + 'transactions';
  private trade!: Trade;

  constructor(private http: HttpClient) { }

  create(transaction: Trade): Trade {
      console.log('Creating Transaction');
      const copy = this.convert(transaction);

      this.http.post<Trade>(this.resourceUrl, copy, { observe: 'response' }).subscribe((data: EntityResponseType) => {
        trade: data.body
      });

    return this.trade;

  }

  // update(transaction: Trade): Trade {
  //     console.log('Updating Transaction');
  //     const copy = this.convert(transaction);
  //     this.http.put<Trade>(this.resourceUrl, copy, { observe: 'response' }).subscribe((data: EntityResponseType) => {
  //       trade: data.body
  //     });

  //   return this.trade;
  // }

  // find(id: number): Trade {
  //   let retorno: Trade = {};

  //     this.http.get<Trade>(`${this.resourceUrl}/${id}`, { observe: 'response'})
  //     .subscribe((data: EntityResponseType) =>{
  //       retorno = this.convertResponse(data)
  //     });

  //     return retorno;
  // }

  // query(req?: any): Trade[] {
  //     const options = createRequestOption(req);
  //     let retorno: Trade[] = [];

  //     return this.http.get<Trade[]>(this.resourceUrl, { params: options, observe: 'response' })
  //     .subscribe((data: EntityResponseType) =>{
  //       retorno = this.convertResponse(data)
  //     });

  //     return retorno;
  // }
  // }

  // delete(id: number): Observable<HttpResponse<any>> {
  //     return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response'});
  // }

  // private convertResponse(res: EntityResponseType): EntityResponseType {
  //     const body: Trade = this.convertItemFromServer(res.body);
  //     return res.clone({body});
  // }

  // private convertArrayResponse(res: HttpResponse<Trade[]>): HttpResponse<Trade[]> {
  //     const jsonResponse: Trade[] = res.body;
  //     const body: Trade[] = [];
  //     for (let i = 0; i < jsonResponse.length; i++) {
  //         body.push(this.convertItemFromServer(jsonResponse[i]));
  //     }
  //     return res.clone({body});
  // }

  // /**
  //  * Convert a returned JSON object to Trade.
  //  */
  // private convertItemFromServer(trade: Trade): Trade {
  //     const copy: Trade = Object.assign({}, trade);
  //     //copy.createdAt = this.dateUtils.convertDateTimeFromServer(trade.createdAt);
  //     //copy.updatedAt = this.dateUtils.convertDateTimeFromServer(trade.updatedAt);
  //     return copy;
  // }

  /**
   * Convert a Trade to a JSON which can be sent to the server.
   */
  private convert(trade: Trade): Trade {
      const copy: Trade = Object.assign({}, trade);
        //copy.createdAt = this.dateUtils.toDate(trade.createdAt);
        //copy.updatedAt = this.dateUtils.toDate(trade.updatedAt);
      return copy;
  }

}
