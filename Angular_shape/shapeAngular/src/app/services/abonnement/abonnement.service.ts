import { Abonnement } from './../../models/abonnement/abonnement';
import { Injectable } from '@angular/core';
import { AppSettings } from 'src/app/settings/app.setting';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {

  httpOptions = {
    headers : new HttpHeaders ({'Content-Type' :'application/json'})
  }

  constructor(private http:HttpClient) { }

  findAllAbonnements(){
    return this.http.get(AppSettings.APP_URL+'/abonnements')
  }

  saveAbonnement(abonnement:Abonnement){
    return this.http.post(AppSettings.APP_URL+'/abonnements', JSON.stringify(abonnement),this.httpOptions);

  }

  editAbonnement(id:number) {
    return this.http.get(AppSettings.APP_URL+'/abonnements/'+id)

  }

  updateAbonnement(abonnement:Abonnement){
    return this.http.put(AppSettings.APP_URL+'/abonnements/'+ abonnement.abonnement_id, JSON.stringify(abonnement),this.httpOptions);
  }

  deleteAbonnement(id : number){
    return this.http.delete(AppSettings.APP_URL+'/abonnements/'+id)

  }
}
