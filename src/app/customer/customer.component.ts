import { Component, OnInit } from '@angular/core';
import { ICustomer } from './customer';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: ICustomer[];
  errorMessage: string;

  constructor( private _deliveriesService: CustomerService) { }
///================== quearue both collection customer and requests to get the data
  ngOnInit() {

      this._deliveriesService.getCustomers().subscribe(customers => {
        this.customers = customers;
        
    },
    error => this.errorMessage = <any>error);
  }


}
