import { Component, OnInit, Inject } from '@angular/core';
import { IDriver } from '../driver';
import { DriverService } from '../shared/driver.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { stringify } from 'querystring';

@Component({
  selector: 'app-diver',
  templateUrl: './diver.component.html',
  styleUrls: ['./diver.component.css']
})
export class DiverComponent implements OnInit {

  driverData : IDriver[];
  drivers: IDriver[];
  public driver_ID: number;

  constructor(private _Driver: DriverService,  public dialogRef: MatDialogRef<DiverComponent>,
    @Inject(MAT_DIALOG_DATA) public driveiD: number) { }
    
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    console.log(this.driver_ID);
    this._Driver.getDrivers().subscribe(data => {
      this.driverData = data;
      this.drivers = this.getDriverData();

    });

  }
  
  //filter drivers array but not working .
  getDriverData() : IDriver[]{
      let x: number = this.driver_ID;
  
     let obj: IDriver[] = this.driverData.filter(function(node) {
          return node.driverID==x;
      });
  
      return obj;   
  }

 
}
