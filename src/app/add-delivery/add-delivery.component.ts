import { Component, OnInit } from '@angular/core';
import { IDelivery} from '../delivery-list/delivery';
import { CustomerService} from '../shared/customer.service';

@Component({
  selector: 'app-add-delivery',
  templateUrl: './add-delivery.component.html',
  styleUrls: ['./add-delivery.component.css']
})
export class AddDeliveryComponent implements OnInit {
   // ++++++++++++++++++   Location  TYPE IN DATABASE REQUIRES CLARIFICATION >>>>>>>>>>>>>
  //customerID : number;
  locationFrom: string;
  locationTo: string;
  cargoType: string;
  costOfDelivery: number;
  description: string;

  constructor( private _deliveryService: CustomerService) { }

  ngOnInit() {
  }
 //  send request to fb db.
  makeRequest(){
 
    let request : IDelivery = {    
    locationFrom: this.locationFrom,
    locationTo: this.locationTo,
    cargoType: this.cargoType,
    costOfDelivery:this.costOfDelivery,
    description: this.description
  };
  this._deliveryService.addDelivery(request);
  console.log(this.description);
  }

}
