import { Component, OnInit } from '@angular/core';
import { IDelivery} from '../delivery-list/delivery';
import { CustomerService} from '../shared/customer.service';
import { GmapsdistanceService } from '../shared/gmapsdistance.service';
import { IDistanceMatrix } from '../IDistance';


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
  costOfDelivery: number = 0;
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

  distanceData: IDistanceMatrix;

  spacer: string = ",%20";

  constructor( private _deliveryService: CustomerService,private _distanceMatric : GmapsdistanceService) { }

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
    
     this.destinationLonLat = this.clickLat.toString()+this.spacer+this.clickLng.toString();
 
     this.originLonLat = this.lat.toString()+this.spacer+this.lng.toString();
     this._distanceMatric.getImageList(this.originLonLat,this.destinationLonLat).subscribe(data => {
       this.distanceData = data,
       console.log(data)
     });
 
     this.getDistance();
 
   }
 
    getDistance(){
      this.locationFrom = "";
      this.locationTo = "";
      
      this.distanceData.destination_addresses.forEach(element => {
        this.locationTo += element + " ";
      });
      this.distanceData.origin_addresses.forEach(element => {
        this.locationFrom += element + " ";
      });
      this.costOfDelivery = (this.distanceData.rows[0].elements[0].distance.value /1000) * 1.1;

      console.log(this.locationFrom, this.locationTo);
      //this.distance = this.distanceData.rows[0].elements[0].distance.value;
    }

}
