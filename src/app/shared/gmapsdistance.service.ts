import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDistanceMatrix } from '../IDistance';

@Injectable({
  providedIn: 'root'
})
export class GmapsdistanceService {

  apiKey: string = "&key=AIzaSyBUp3Y-GD97Imt6axIjoY9zNz_M-bTObLA";
  url : string = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=";
  destations: string = "&destinations=";
  data: IDistanceMatrix;

  //https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=54.2744576,%20-8.461516800000002&destinations=54.17275899596889%20-8.487980399717344&key=AIzaSyBUp3Y-GD97Imt6axIjoY9zNz_M-bTObLA

  constructor(private _http: HttpClient) { }

  getImageList(origin: string, destination: string): Observable<IDistanceMatrix>{
    return this._http.get<IDistanceMatrix>(this.url+origin+this.destations+destination+this.apiKey);
  }
}
