import { Entrainement } from './../../models/entrainement/entrainement';
import { AppSettings } from './../../settings/app.setting';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntrainementService {

  httpOptions = {
    headers : new HttpHeaders ({'Content-Type' :'application/json'})
  }

  constructor(private http:HttpClient) { }

  findAllEntrainements(){
    return this.http.get(AppSettings.APP_URL+'/entrainements')
  }

  saveEntrainement(entrainement:Entrainement){
    return this.http.post(AppSettings.APP_URL+'/entrainements', JSON.stringify(entrainement),this.httpOptions);

  }

  editEntrainement(id:number) {
    return this.http.get(AppSettings.APP_URL+'/entrainements/'+id)

  }

  updateEntrainement(entrainement:Entrainement){
    return this.http.put(AppSettings.APP_URL+'/entrainements/'+ entrainement.entrainement_id, JSON.stringify(entrainement),this.httpOptions);
  }

  deleteEntrainement(id : number){
    return this.http.delete(AppSettings.APP_URL+'/entrainements/'+id)

  }
}
