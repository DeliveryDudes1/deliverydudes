import { Component, OnInit } from '@angular/core';
import {IDelivery} from './delivery'
import { CustomerService } from '../shared/customer.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
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

  constructor( private _deliveriesService: CustomerService,private myRoute: Router, private _auth: AuthService) { }

  ngOnInit() {
      this.sortingEmail = this._auth.getCutomerEmail();

      this._deliveriesService.getProducts().subscribe(deliveries => {
      this.deliveries = deliveries.filter(d => d.email == this.sortingEmail),// filter by customer email,
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
    this._deliveriesService.deleteRequest(id);
}
get listFilter() : string {
  return this._listFilter;
}
set listFilter(value : string) {
  console.log(value);
  this._listFilter = value;
  this.filterDeliveries = this.listFilter ? this.performFilter(this.listFilter) : this.deliveries;
}

performFilter(filterBy : string) : IDelivery[]{
  filterBy = filterBy.toLocaleLowerCase();
  return this.deliveries.filter((request : IDelivery) =>
      request.locationFrom.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

}
