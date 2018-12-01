import { Component, OnInit } from '@angular/core';
import {IDelivery} from './delivery'
import { CustomerService } from '../shared/customer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent implements OnInit {

  deliveries: IDelivery[];
  filterDeliveries: IDelivery[];
  errorMessage: string;

  constructor( private _deliveriesService: CustomerService,private myRoute: Router) { }
///================== quearue both collection customer and requests to get the data
  ngOnInit() {

      this._deliveriesService.getProducts().subscribe(deliveries => {
        this.deliveries = deliveries
        this.filterDeliveries = deliveries;
    },
    error => this.errorMessage = <any>error);

  }
  showDivertComponent()
  {
    this.myRoute.navigate(["driver"]);
  }
}
