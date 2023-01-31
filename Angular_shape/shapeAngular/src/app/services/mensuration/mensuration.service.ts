import { Mensuration } from './../../models/mensuration/mensuration';
import { AppSettings } from './../../settings/app.setting';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensurationService {

  httpOptions = {
    headers : new HttpHeaders ({'Content-Type' :'application/json'})
  }

  constructor(private http:HttpClient) { }

  findAllMensurations(){
    return this.http.get(AppSettings.APP_URL+'/mensurations')
  }

  saveMensuration(mensuration:Mensuration){
    return this.http.post(AppSettings.APP_URL+'/mensurations', JSON.stringify(mensuration),this.httpOptions);

  }

  editMensuration(id:number) {
    return this.http.get(AppSettings.APP_URL+'/mensurations/'+id)

  }

  updateMensuration(mensuration:Mensuration){
    return this.http.put(AppSettings.APP_URL+'/mensurations/'+ mensuration.mensuration_id, JSON.stringify(mensuration),this.httpOptions);
  }

  deleteMensuration(id : number){
    return this.http.delete(AppSettings.APP_URL+'/mensurations/'+id)

  }
}
