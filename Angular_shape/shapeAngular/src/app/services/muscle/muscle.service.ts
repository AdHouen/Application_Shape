import { Muscle } from './../../models/muscle/muscle';
import { AppSettings } from './../../settings/app.setting';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MuscleService {

  httpOptions = {
    headers : new HttpHeaders ({'Content-Type' :'application/json'})
  }

  constructor(private http:HttpClient) { }

  findAllMuscles(){
    return this.http.get(AppSettings.APP_URL+'/muscles')
  }

  saveMuscle(muscle:Muscle){
    return this.http.post(AppSettings.APP_URL+'/muscles', JSON.stringify(muscle),this.httpOptions);

  }

  editMuscle(id:number) {
    return this.http.get(AppSettings.APP_URL+'/muscles/'+id)

  }

  updateMuscle(muscle:Muscle){
    return this.http.put(AppSettings.APP_URL+'/muscles/'+ muscle.muscle_id, JSON.stringify(muscle),this.httpOptions);
  }

  deleteMuscle(id : number){
    return this.http.delete(AppSettings.APP_URL+'/muscles/'+id)

  }
}
