export class Entrainement {

  public entrainement_id : number;
	public entrainement_date: Date;
	public entrainement_nom: string;
	public entrainement_serie: number;
	public entrainement_repetition: number;
	public entrainement_poids: number;
	public entrainement_pause: number;
	public entrainement_tempsSeconde: number;
	public entrainement_distance: number;
	public exercice_id: number;
  constructor(){
    this.entrainement_id= 0;
    this.entrainement_date= new Date (1989, 11, 13);
    this.entrainement_nom= "";
    this.entrainement_serie= 0;
    this.entrainement_repetition= 0;
    this.entrainement_poids= 0;
    this.entrainement_pause= 0;
    this.entrainement_tempsSeconde= 0;
    this.entrainement_distance= 0;
    this.exercice_id= 0;
  }

  
}
