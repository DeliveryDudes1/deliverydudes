import { Component, OnInit } from '@angular/core';
import {IDelivery} from './delivery'
import { CustomerService } from '../shared/customer.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { MatDialog,MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DiverComponent } from '../diver/diver.component';
import { DeliveryService } from '../shared/delivery.service';
@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent implements OnInit {

  deliveries: IDelivery[];
  filterDeliveries: IDelivery[];
  errorMessage: string;
  _listFilter: string;
  sortingEmail: string;

  constructor( private _deliveryService: DeliveryService,private myRoute: Router, private _auth: AuthService,
    public dialog: MatDialog) { }

  ngOnInit() {
      this.sortingEmail = this._auth.getCutomerEmail();

      this._deliveryService.getDelivery().subscribe(deliveries => {
      this.deliveries = deliveries.filter(d => d.email == this.sortingEmail),// filter by customer email == Marek == ,
      this.filterDeliveries = deliveries.filter(d => d.email == this.sortingEmail),
        console.log("list email --" , this.sortingEmail)
    },
    error => this.errorMessage = <any>error);
    
  }

  showDivertComponent()
  {
    this.myRoute.navigate(["driver"]);
  }

  deleteRequest(id: string): void{
    this._deliveryService.deleteRequest(id);
}
get listFilter() : string {
  return this._listFilter;
}
set listFilter(value : string) {
  console.log(value);
  this._listFilter = value;
  this.filterDeliveries = this.listFilter ? this.performFilter(this.listFilter) : this.deliveries;

}

performFilter(filterBy : string) : IDelivery[]{ // 
  filterBy = filterBy.toLocaleLowerCase();
  return this.deliveries.filter((request : IDelivery) => 
      request.locationTo.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

openDialog(driverID : number): void {
  const dialogRef = this.dialog.open(DiverComponent, {
    width: '50%',
    data: driverID
  });
  dialogRef.componentInstance.driver_ID = driverID;

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  });

}

}
