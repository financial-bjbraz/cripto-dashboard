import { DevicesService } from './devices.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  devicesIncrease!: string;
  totalDevices!: string;
  deliveryValue!: string;
  deliveryIncrease!: string;
  deliveryQuantity!: string;
  deliveryQuantityIncrease!: string;
  deliverySuccess!: string;
  deliverySuccessIncrease!: string;
  sub: Subscription = new Subscription;
  devices!: Array<any>;
  teste!: string;

  constructor(private devicesService: DevicesService) { }

  ngOnInit() {
    console.log('Initializing...');
    this.teste = 'Este e um teste';
    this.devicesService.getAll().subscribe(data => {
      console.log(data);
      this.devices = data;
      for (const device of this.devices) {
        //this.giphyService.get(car.name).subscribe(url => car.giphyUrl = url);
        console.log(device);
      }
    });
  }

}
