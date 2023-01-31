export class Exercice {

  public exercice_id: number;
	public exercice_nom: string;
	public exercice_description: string;
	public exercice_photo: string;
	public muscle_id: number;
  public listEntrainement:[];
  constructor(){
    this.exercice_id= 0;
    this.exercice_nom= "";
    this.exercice_description= "";
    this.exercice_photo= "";
    this.muscle_id= 0;
    this.listEntrainement=[];
  }


}
