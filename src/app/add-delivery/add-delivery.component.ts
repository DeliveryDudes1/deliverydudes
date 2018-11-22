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

  lat: number;
  lng: number;

  originLonLat: string;
  destinationLonLat: string;

  clickLat: number;
  clickLng: number;

  markers: any;
  subscription: any;

  distance : number;

  isclicked: boolean = false;

  constructor( private _deliveryService: CustomerService) { }

  ngOnInit() {
    this.getUserLocation();
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

  private getUserLocation() {
    /// locate the user
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
 
      });
    }
   }
   onClick(ent) {
     console.log(ent);
     this.clickLat = ent.coords.lat;
     this.clickLng = ent.coords.lng;
     this.isclicked = true;
     console.log(this.clickLng);
    
     /*this.destinationLonLat = this.clickLat.toString()+this.clickLng.toString();
 
     this.originLonLat = this.lat.toString()+this.lng.toString();
     this._distanceMatric.getImageList(this.originLonLat,this.destinationLonLat).subscribe(data => {
       this.distanceData = data
     });
 
     this.getDistance();*/
 
   }
 
    /*getDistance(){
      this.distance = this.distanceData.rows[0].elements[0].distance.value;
    }*/

}
