import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-list',
  templateUrl: './login-list.component.html',
  styleUrls: ['./login-list.component.css']
})
export class LoginListComponent implements OnInit {

  errorMessage : string;

  ngOnInit() {
  }

  error: any;

  constructor(public af: AuthService,private router: Router) {

    
  }


  loginFb() {
   this.af.doFacebookLogin().then(
    res => {
      this.router.navigate(['customer']); //change that to request list
    }, err => {
      console.log(err);
      this.errorMessage = err.message;
    }
  )  
  }

  loginGoogle() {
    this.af.doGoogleLogin().then(
      res => {
        this.router.navigate(['customer']); //change that to request list
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      }
    )  
   
  } 

  

}
