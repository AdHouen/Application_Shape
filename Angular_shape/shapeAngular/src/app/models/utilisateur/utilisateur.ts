export class Utilisateur {

  public utilisateur_id: number;
	public utilisateur_nom:string;
	public utilisateur_prenom:string;
	public utilisateur_pseudo:string;
	public utilisateur_email:string;
	public utilisateur_password:string;
	public utilisateur_photo:string;
	public utilisateur_genre:string;
	public utilisateur_dateSouscriptionFin:Date;
  public listGallerie:[];
  public listMuscle:[];
  constructor(){
    this.utilisateur_id= 0;
    this.utilisateur_nom= "";
    this.utilisateur_prenom= "";
    this.utilisateur_pseudo= "";
    this.utilisateur_email= "";
    this.utilisateur_password= "";
    this.utilisateur_photo= "";
    this.utilisateur_genre= "";
    this.utilisateur_dateSouscriptionFin= new Date (1989, 11, 13);
    this.listGallerie = [];
    this.listMuscle = [];

  }
  
}
