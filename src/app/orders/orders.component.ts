import { OrdersService } from './orders.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  sub: Subscription = new Subscription;
  orders: Array<any> = [];
  inventories: Array<any> = [];
  valores: Array<any> = [];

  constructor(private orderService: OrdersService) { }

  ngOnInit() {
    console.log('Initializing Orders...');
    this.orderService.getAll().subscribe((data: Array<any>) => {
      this.orders = data
    });


    this.orderService.getAllInventory().subscribe(data => {
      console.log(data);
      this.inventories = data;
    });

    this.orderService.getAllValues().subscribe(data => {
      console.log(data);
      this.valores = data;
    });



  }

}
