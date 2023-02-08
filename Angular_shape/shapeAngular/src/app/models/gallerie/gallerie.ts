export class Gallerie {

  public gallerie_id: number;
	public gallerie_photo: string;
	public gallerie_date: Date;
	public utilisateur_id: number;
  constructor(){
    this.gallerie_id = 0;
    this.gallerie_photo = "";
    this.gallerie_date = new Date ();
    this.utilisateur_id = 0;
  }


}
