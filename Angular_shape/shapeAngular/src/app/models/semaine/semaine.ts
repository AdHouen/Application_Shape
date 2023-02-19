export class Semaine {

  public semaine_id: number;
	public semaine_jour:string;
  public listEntrainement:[];

  constructor(){
    this.semaine_id= 0;
    this.semaine_jour= "";
    this.listEntrainement = [];
  }
}
