import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import {ICustomer } from '../customer/customer';
import { CustomerService} from '../shared/customer.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: string;
  pwd: string;
  name: string;
  phone: string;
  isClicked: boolean;

  constructor(private auth: AuthService, private _customerService: CustomerService, private routes: Router)
   {}

  ngOnInit() {
  }

  register() {
    this.auth.signup(this.email, this.pwd,this.name);
    console.log(this.email);
    console.log(this.pwd);
    // add customer to customers collection in fb == Marek ==
    let customer : ICustomer = {
      email:this.email,
      name:this.name,
      phone:this.phone,
      customerID: 1
    };
    this._customerService.addCustomer(customer)

    this.isClicked = true;

  }

}
