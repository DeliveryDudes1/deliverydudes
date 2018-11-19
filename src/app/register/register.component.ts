import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { FormBuilder, Validators } from '@angular/forms';


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

  constructor(private auth: AuthService)
   {}

  ngOnInit() {
  }

  register() {
    this.auth.signup(this.email, this.pwd,this.name);
    console.log(this.email);
    console.log(this.pwd);
    

  }

}
