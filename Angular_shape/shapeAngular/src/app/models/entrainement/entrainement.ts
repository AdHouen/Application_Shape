export class Entrainement {

  public entrainement_id : number;
	public entrainement_jour: string;
	public entrainement_muscle: string;
	public entrainement_exo: string;
	public entrainement_serie: number;
	public entrainement_repetition: number;
	public entrainement_poids: number;
	public entrainement_recup: number;
	public entrainement_temps: number;
	public entrainement_distance: number;
	public utilisateur_id: number;
  constructor(){
    this.entrainement_id= 0;
    this.entrainement_jour= "";
    this.entrainement_muscle= "";
    this.entrainement_exo= "";
    this.entrainement_serie= 0;
    this.entrainement_repetition= 0;
    this.entrainement_poids= 0;
    this.entrainement_recup= 0;
    this.entrainement_temps= 0;
    this.entrainement_distance= 0;
    this.utilisateur_id= 0;
  }
}
