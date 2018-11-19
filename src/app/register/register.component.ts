import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import {ICustomer } from '../customer/customer';
import { CustomerService} from '../shared/customer.service'



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
  cid:number;

  constructor(private auth: AuthService, private _customerService: CustomerService)
   {}

  ngOnInit() {
  }

  register() {
    this.auth.signup(this.email, this.pwd,this.name);
    console.log(this.email);
    console.log(this.pwd);
    // add customer to customer collection
    let customer : ICustomer = {

      email:this.email,
      name:this.name,
      phone:this.phone,
      
    };
    this._customerService.addCustomer(customer);

  }

}
