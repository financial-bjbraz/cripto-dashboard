import { CalledApis } from './calledapis.model';
import { HttpCodes } from './http.model';
import { Totals } from './totals.model';
import { Component, OnInit } from '@angular/core';
import { ExchangeService } from './exchange.service';
import { User } from './user.model';
import { Participants } from './participants.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { HttpDetail } from './httpdetail.model';
import { ApiImplementada } from './apiimplementada.model';


@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {

  user!: User;
  totals!: Totals;
  participants!: Array<Participants>;
  httpCodes!: Array<HttpCodes>;
  balance:number;
  nome!: string;
  calledApis!:CalledApis;
  apisImplementadas!:Array<ApiImplementada>;

  constructor(private service: ExchangeService) {
    this.balance = 0;
   }

  ngOnInit() {
    console.log('Initializing CryptoServices...');
    this.service.checkCredentials();

    this.user = new User();
    this.user.name = "Alex";

    this.service.getTotals().subscribe(data => this.totals = {
        id: (data as any)[0].id,
        dhExtraction: new Date((data as any)[0].dhExtraction[0], (data as any)[0].dhExtraction[1] -1, (data as any)[0].dhExtraction[2] ),
        totalAuthorisationServers: (data as any)[0].totalAuthorisationServers,
        totalParticipantsActive: (data as any)[0].totalParticipantsActive,
        totalParticipantsRegistered: (data as any)[0].totalParticipantsRegistered,
        totalParticipantsInactive: (data as any)[0].totalParticipantsRegistered - (data as any)[0].totalParticipantsActive
     });

     this.service.getParticipants().subscribe( (data: Array<Participants>) => this.participants = data);

     this.service.getApisImplementadas().subscribe( (data: Array<ApiImplementada>) => this.apisImplementadas = data );

     this.calcularTotalApisChamadas();


    // this.service.getUserDetails().subscribe(data => {
    //   console.log("User obtained..." + data);
    //   this.user = data;
    // },
    // (err) => {console.log("Ocorreu o seguite erro: " + err)});

    // this.service.getUsers().subscribe(data => {
    //   console.log(data);
    //   this.users = data;
    //   this.nome = data.name;
    //   console.log(this.users);

    //   // for (const device of this.devices) {
    //   //   //this.giphyService.get(car.name).subscribe(url => car.giphyUrl = url);
    //   //   console.log(device);
    //   // }

    // },
    // (err) => {console.log("Ocorreu o seguinte erro: "+err)});

    // this.service.getBalance().subscribe(data => {
    //   console.log("Data Obtained on GETBALANCE ==> " + data);
    //   this.balance = data.balance.toFixed(2);
    // },
    // (err) => {console.log("Ocorreu o seguinte erro: "+err)});


  }

  calcularTotalApisChamadas(){
    this.calledApis = new CalledApis([], 0);
    this.calledApis.total = 0;
    let total = 0;
    this.service.getHttpCodes().subscribe( (data:Array<HttpCodes>) => {
    this.httpCodes = data;

    let i = 0;
    this.calledApis.details = [];

      for(var httpcode of this.httpCodes){
        total+= httpcode.total;
        console.log(" value of i " + i);
        if(i > 2){
          this.calledApis.details[3] = new HttpDetail("",0,0,"");
          this.calledApis.details[3].code = 'Outros';
          this.calledApis.details[3].total = (this.calledApis.details[3].total || 0) + (httpcode.total || 0);
          console.log('value of code ' + this.calledApis.details[3].code);
        }else{
          this.calledApis.details[i] = new HttpDetail("",0,0,"");
          this.calledApis.details[i].code  = httpcode.httpStatusCode;
          this.calledApis.details[i].total = httpcode.total;
          console.log('value of code ' + this.calledApis.details[i].code);
        }

        i++;
      }

      for(var detail of this.calledApis.details){
        console.log("############################################### " + detail.code);
        detail.percentilFormatted = ((detail.total / total) *  100).toFixed(2);
        console.log(" total " + total);
        console.log(" d total " + detail.total);
        console.log(" d percentil " + detail.percentil);
      }



      this.calledApis.total = total;

    });









  }

  processError(a:string){
    console.log(a);
  }


}
