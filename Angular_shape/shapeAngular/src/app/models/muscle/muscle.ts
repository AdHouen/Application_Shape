export class Muscle {

  public muscle_id: number;
	public muscle_nom: string;
	public muscle_image: string;
	public utilisateur_id: number;
	public listMensuration: [];
	public listExercice: [];


  constructor(){
    this.muscle_id= 0;
	  this.muscle_nom= "";
	  this.muscle_image= "";
	  this.utilisateur_id= 0;
	  this.listMensuration= [];
	  this.listExercice= [];
  }
  
}
