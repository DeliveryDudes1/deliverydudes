import { Component, OnInit } from '@angular/core';
import { ICustomer } from './customer';
import { CustomerService } from '../shared/customer.service';
//import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: ICustomer[];
  errorMessage: string;
  cEmail : string;

  constructor( private _deliveriesService: CustomerService, private __auth : AuthService ) { 
  }

  ngOnInit() {

      this.cEmail = this.__auth.getCutomerEmail();
      this._deliveriesService.getCustomers().subscribe(customers => {
      this.customers = customers.filter(c => c.email == this.cEmail); // filter customers by email == Marek ==.
      console.log("customer email -- ", this.cEmail);
    },

    error => this.errorMessage = <any>error);
  }




}
