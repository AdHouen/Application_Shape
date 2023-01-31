import { Exercice } from './../../models/exercice/exercice';
import { AppSettings } from './../../settings/app.setting';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciceService {

  httpOptions = {
    headers : new HttpHeaders ({'Content-Type' :'application/json'})
  }

  constructor(private http:HttpClient) { }

  findAllExercices(){
    return this.http.get(AppSettings.APP_URL+'/exercices')
  }

  saveExercice(exercice:Exercice){
    return this.http.post(AppSettings.APP_URL+'/exercices', JSON.stringify(exercice),this.httpOptions);

  }

  editExercice(id:number) {
    return this.http.get(AppSettings.APP_URL+'/exercices/'+id)

  }

  updateExercice(exercice:Exercice){
    return this.http.put(AppSettings.APP_URL+'/exercices/'+ exercice.exercice_id, JSON.stringify(exercice),this.httpOptions);
  }

  deleteExercice(id : number){
    return this.http.delete(AppSettings.APP_URL+'/exercices/'+id)

  }
}
