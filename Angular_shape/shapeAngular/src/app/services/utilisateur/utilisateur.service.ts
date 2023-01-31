import { Utilisateur } from './../../models/utilisateur/utilisateur';
import { AppSettings } from './../../settings/app.setting';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  httpOptions = {
    headers : new HttpHeaders ({'Content-Type' :'application/json'})
  }

  constructor(private http:HttpClient) { }

  findAllUtilisateurs(){
    return this.http.get(AppSettings.APP_URL+'/utilisateurs')
  }

  saveUtilisateur(utilisateur:Utilisateur){
    return this.http.post(AppSettings.APP_URL+'/utilisateurs', JSON.stringify(utilisateur),this.httpOptions);

  }

  editUtilisateur(id:number) {
    return this.http.get(AppSettings.APP_URL+'/utilisateurs/'+id)

  }

  updateUtilisateur(utilisateur:Utilisateur){
    return this.http.put(AppSettings.APP_URL+'/utilisateurs/'+ utilisateur.utilisateur_id, JSON.stringify(utilisateur),this.httpOptions);
  }

  deleteUtilisateur(id : number){
    return this.http.delete(AppSettings.APP_URL+'/utilisateurs/'+id)

  }
}
