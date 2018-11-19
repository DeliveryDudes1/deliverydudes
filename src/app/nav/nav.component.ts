import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
// =============== COMMENTED OUT ARE AUTH FEATURES ))))))))))))))))))))))))))
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  title: string ="Delivery Dudes";

  isLoggedIn: boolean;

 constructor( private auth: AuthService, private myRoute: Router) { }

  userLoggedIn(): boolean{
    this.isLoggedIn =  this.auth.isLoggedIn();
    return this.isLoggedIn
  }
onLogout(){
  this.auth.doLogout();
  this.isLoggedIn = this.auth.isLoggedIn();
  this.myRoute.navigate(["login"]);
}/** */
  ngOnInit() {
    this.isLoggedIn = this.auth.isLoggedIn();
  }

}