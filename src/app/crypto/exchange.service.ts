import { ApiImplementada } from './apiimplementada.model';
import { HttpCodes } from './http.model';
import { Totals } from './totals.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Cookie } from 'ng2-cookies';
import { Token } from './token.model';
import { User } from './user.model';
import { Observable } from 'rxjs';
import { SERVER_API_URL} from '../shared';
import { Participants } from './participants.model';


@Injectable()
export class ExchangeService {
  public GET_ACCOUNT = SERVER_API_URL + 'accounts/49650416000144';
  public GET_BALANCE = SERVER_API_URL + 'accounts/balance/49650416000144';
  public GET_TOTALS = SERVER_API_URL + "open_finance/totals";
  public GET_PARTICIPANTS = SERVER_API_URL + "open_finance/all";
  public GET_HTTP_CODES = SERVER_API_URL + "open_finance/http";
  public GET_API_IMPLEMENTADA = SERVER_API_URL + "open_finance/apis";

  public headers =
      new HttpHeaders(
        {'Content-type': 'application/json'}
        );

  constructor(private _http: HttpClient) {
  }

  obtainAccessToken(){
    console.log("Obtaining Access Token...");
    let params = JSON.stringify({
      'username':"usuario",
      'password':"user"});

    this.headers = this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers = this.headers.append('x-correlation-id', '12345');
    this.headers = this.headers.append('Access-Control-Allow-Credentials', 'true');
    this.headers = this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
    this.headers = this.headers.append('Access-Control-Allow-Methods', 'POST');

    let options = {
        headers: this.headers
     }

    console.log("Connecting to server::"+SERVER_API_URL);

    this._http.post<Token>(SERVER_API_URL+'login', params, options)
      //.map((res: HttpResponse<Token>) => this.saveToken(res))
      .subscribe(
        data => this.saveToken(data),
        err => this.processError(err)
      );
  }

  processError(err: string){
    console.log(err);
    alert('Invalid Credentials 2' + err);
  }



  getTotals(): Observable<Array<Totals>>{
    this.headers =
      new HttpHeaders(
        {'Content-type': 'application/json'}
        );

    this.headers = this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers = this.headers.append('x-correlation-id', '12345');
    this.headers = this.headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    this.headers = this.headers.append('Authorization', Cookie.get('access_token'));
    let options = {
      headers: this.headers
    }
    return this._http.get<Array<Totals>>(this.GET_TOTALS, options)
  }

  getParticipants(): Observable<Array<Participants>>{
    this.headers =
      new HttpHeaders(
        {'Content-type': 'application/json'}
        );

    this.headers = this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers = this.headers.append('x-correlation-id', '12345');
    this.headers = this.headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    this.headers = this.headers.append('Authorization', Cookie.get('access_token'));
    let options = {
      headers: this.headers
    }
    return this._http.get<Array<Participants>>(this.GET_PARTICIPANTS, options)
  }

  getApisImplementadas(): Observable<Array<ApiImplementada>>{
    this.headers =
      new HttpHeaders(
        {'Content-type': 'application/json'}
        );

    this.headers = this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers = this.headers.append('x-correlation-id', '12345');
    this.headers = this.headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    this.headers = this.headers.append('Authorization', Cookie.get('access_token'));
    let options = {
      headers: this.headers
    }
    return this._http.get<Array<ApiImplementada>>(this.GET_API_IMPLEMENTADA, options)
  }

  getHttpCodes(): Observable<Array<HttpCodes>>{
    this.headers =
      new HttpHeaders(
        {'Content-type': 'application/json'}
        );

    this.headers = this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers = this.headers.append('x-correlation-id', '12345');
    this.headers = this.headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    this.headers = this.headers.append('Authorization', Cookie.get('access_token'));
    let options = {
      headers: this.headers
    }
    return this._http.get<Array<HttpCodes>>(this.GET_HTTP_CODES, options)
  }

  getBalance(): Observable<any>{

    this.headers =
      new HttpHeaders(
        {'Content-type': 'application/json'}
        );

    this.headers = this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers = this.headers.append('x-correlation-id', '12345');
    this.headers = this.headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    this.headers = this.headers.append('Authorization', Cookie.get('access_token'));
    let options = {
      headers: this.headers
    }
    return this._http.get(this.GET_BALANCE, options)
  }


  saveToken(token: Token){
    console.log('Bearer obtained token::'+token.token);
    var expireDate = new Date().getTime() + 1000;
    Cookie.set("access_token", "Bearer "+token.token, expireDate);
  }

  checkCredentials(){

    if (!Cookie.check('access_token')){
        this.obtainAccessToken();
    }
    console.log("#########################################################");
    console.log("Token Obtained :"+ Cookie.check('access_token') + " => |"+Cookie.get('access_token')+"|");
    console.log("#########################################################");

  }

  // getAll(): Observable<any> {
  //   return this._http.get(this.DEVICES_API);
  // }

  // get(id: string) {
  //   console.log(id);
  //   return this._http.get(this.DEVICES_API + '/' + id);
  // }



}
