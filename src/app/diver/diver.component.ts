import { Component, OnInit } from '@angular/core';
import { IDriver } from '../driver';
import { DriverService } from '../shared/driver.service';

@Component({
  selector: 'app-diver',
  templateUrl: './diver.component.html',
  styleUrls: ['./diver.component.css']
})
export class DiverComponent implements OnInit {

  driverData : IDriver[];

  constructor(private _Driver: DriverService) { }

  ngOnInit() {
    this._Driver.getDrivers().subscribe(data => {
      this.driverData = data
    });
  }

}
