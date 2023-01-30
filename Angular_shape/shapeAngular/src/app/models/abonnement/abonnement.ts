export class Abonnement {

  public abonnement_id: number;
	public abonnement_type: string;
	public abonnement_dateSouscription: Date;
	public abonnement_duree: number;
	public tilisateur_id: number;
  constructor(){
    this.abonnement_id = 0;
    this.abonnement_type = "";
    this.abonnement_dateSouscription = new Date (1989, 11, 13);
    this.abonnement_duree = 0;
    this.tilisateur_id = 0;
  }
  
}
