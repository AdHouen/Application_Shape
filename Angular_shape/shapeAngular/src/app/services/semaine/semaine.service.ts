import { Semaine } from './../../models/semaine/semaine';
import { AppSettings } from 'src/app/settings/app.setting';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SemaineService {

  httpOptions = {
    headers : new HttpHeaders ({'Content-Type' :'application/json'})
  }

  constructor(private http:HttpClient) { }

  findAllSemaines(){
    return this.http.get(AppSettings.APP_URL+'/semaines')
  }

  saveSemaine(semaine:Semaine){
    return this.http.post(AppSettings.APP_URL+'/semaines', JSON.stringify(semaine),this.httpOptions);

  }

  editSemaine(id:number) {
    return this.http.get(AppSettings.APP_URL+'/semaines/'+id)

  }

  updateSemaine(semaine:Semaine){
    return this.http.put(AppSettings.APP_URL+'/semaines/'+ semaine.semaine_id, JSON.stringify(semaine),this.httpOptions);
  }

  deleteSemaine(id : number){
    return this.http.delete(AppSettings.APP_URL+'/semaines/'+id)

  }
}
