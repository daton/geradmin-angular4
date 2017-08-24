import { Injectable } from '@angular/core';
import {Http, Response,Headers, RequestOptions, ResponseContentType} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Profesor} from './profesor';



@Injectable()
export class ProfesorService {
  private direccionUrl='https://geradmin.herokuapp.com/api/profesor';
  private headers=new Headers({'Content-Type':'application/json'})
  constructor(private http:Http) { }

  getProfesor():Observable<Profesor>{
    return this.http.get(this.direccionUrl)
    .map((res:Response)=><Profesor>res.json());

  }

}
