import { Component, OnInit } from '@angular/core';
import { IDelivery} from '../delivery-list/delivery';
import { CustomerService} from '../shared/customer.service';
import { DriverService} from '../shared/driver.service';
import { GmapsdistanceService } from '../shared/gmapsdistance.service';
import { IDistanceMatrix } from '../IDistance';
import { IDriver } from '../driver';
import { AuthService } from '../service/auth.service';
import {MatSnackBar} from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { DeliveryService } from '../shared/delivery.service';


@Component({
  selector: 'app-add-delivery',
  templateUrl: './add-delivery.component.html',
  styleUrls: ['./add-delivery.component.css']
})
export class AddDeliveryComponent implements OnInit {

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
/// +++++++++++++++++  Email sorting +++++++++++++++++++++++
  ADcustEmail:string;
  spacer: string = ",%20";
  dudes: IDriver[] ;
  form;

  constructor( private _CustomerService: CustomerService,
    private _distanceMatric : GmapsdistanceService, 
    private _driverService: DriverService,
    private _auth: AuthService,
    private _deliveryService :DeliveryService,
    public snackBar: MatSnackBar
  )
  { }

  ngOnInit() {
    this.getUserLocation();
    // get drivers names for selection.
    this._driverService.getDrivers().subscribe(data => {
    this.dudes = data,
      console.log(data)
    });
    
    this.ADcustEmail = this._auth.getCutomerEmail();// get this customer email;
    console.log("make delivery cust email -- " ,this.ADcustEmail);
  }
 //  send request to fb db.

  makeRequest(){
 
    let request : IDelivery = {    
    locationFrom: this.locationFrom,
    locationTo: this.locationTo,
    cargoType: this.cargoType,
    costOfDelivery:this.costOfDelivery,
    description: this.description,
    driverID: 1,
    customerID: 1,
    ID: 1,
    email: this.ADcustEmail // send to Firabase as sorting referance.

  };
  // Sends delivery data to firebase.
  this._deliveryService.addDelivery(request);
  console.log(this.description);
  this.OpenSnackBar("Delivery request made")
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
      this.distance = this.distanceData.rows[0].elements[0].distance.value;
      this.isclicked = true;
    }

    
    OpenSnackBar(message: string) {
      //let snackBarRef = snackBar.open('Message archived');
      this.snackBar.open(message, '', {
        duration: 2500
      });
    }


}
