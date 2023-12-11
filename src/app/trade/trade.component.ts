import { TradeService } from './trade.service';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Trade, Status } from './trade.model';

@Component({
  selector: 'trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {

  trade: Trade;

  saved: boolean = false;

  error:boolean;

  isSaving:boolean = false;
  errorMessage:string = '';
  successMessage:string = '';
  sub!: Subscription;
  devices!: Array<any>;
  teste!:string;

  constructor(private tradeService: TradeService) {
    this.saved, this.error = false;

    this.trade = new Trade();
    this.trade.status = Status.CREATED;
    this.trade.baseSymbol = 'Bitcoins';
  }

  ngOnInit() {
    console.log('Initializing Trade Component...');
    this.teste = 'Este e um teste xxxxxxxx';
    /**
    this.tradeService.getAll().subscribe(data => {
      console.log(data._embedded.devices);
      this.devices = data._embedded.devices;
      for (const device of this.devices) {
        //this.giphyService.get(car.name).subscribe(url => car.giphyUrl = url);
        console.log(device);
      }
    });
    */
  }

  save(){
    console.log('Saving...');
    this.isSaving = true;
    this.errorMessage = '';
    this.saved      = false;
    this.error      = false;

    if (this.trade.id !== undefined) {
      this.trade.createdAt = new Date().toISOString().slice(0,16);
      this.trade.updatedAt = new Date().toISOString().slice(0,16);

      // this.subscribeToSaveResponse(
          // this.tradeService.update(this.trade));
  } else {
      this.trade.createdAt = new Date().toISOString().slice(0,16);
      this.trade.updatedAt = this.trade.createdAt;
      this.tradeService.create(this.trade);
  }

  }

  // private subscribeToSaveResponse(result: Observable<HttpResponse<Trade>>) {
  //   result.subscribe((res: HttpResponse<Trade>) =>
  //       this.onSaveSuccess(res.body), (res: HttpErrorResponse) => this.onSaveError());
  // }

  private onSaveSuccess(result: Trade) {
    //this.eventManager.broadcast({ name: 'transactionListModification', content: 'OK'});
    this.isSaving     = false;
    this.trade  = result;

    //this.transaction.createdAt = this.dateUtils.convertDateTimeFromServer(result.createdAt);
    //this.transaction.updatedAt = this.dateUtils.convertDateTimeFromServer(result.updatedAt);

    this.successMessage = "Transaction created sucessfully";
    this.saved          = true;
  }

  private onSaveError() {
    this.isSaving = false;
    this.errorMessage = 'Error on saving Transaction';
    this.saved      = false;
    this.error      = true;
    this.saved      = false;
  }

}
