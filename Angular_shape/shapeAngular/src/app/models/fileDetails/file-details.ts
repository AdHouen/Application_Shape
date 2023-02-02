export class FileDetails {

  public gallerie_id: number;
	public gallerie_filename: string;
	public data : [];
	public gallerie_date: Date;
	public utilisateur_id : number;

  constructor(){
    this.gallerie_id = 0;
    this.gallerie_filename = "";
    this.data = [];
    this.gallerie_date = new Date (1989, 11, 13);
    this.utilisateur_id= 0;
  }

  
}
