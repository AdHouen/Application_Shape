export class Entrainement {

  public entrainement_id : number;
	public entrainement_muscle: string;
	public entrainement_exo: string;
	public entrainement_serie: number;
	public entrainement_repetition: number;
	public entrainement_poids: number;
	public entrainement_pause: number;
	public entrainement_tempsSeconde: number;
	public entrainement_distance: number;
	public semaine_id: number;
  constructor(){
    this.entrainement_id= 0;
    this.entrainement_muscle= "";
    this.entrainement_exo= "";
    this.entrainement_serie= 0;
    this.entrainement_repetition= 0;
    this.entrainement_poids= 0;
    this.entrainement_pause= 0;
    this.entrainement_tempsSeconde= 0;
    this.entrainement_distance= 0;
    this.semaine_id= 0;
  }
}
