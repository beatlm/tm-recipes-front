export class RecipeModel {
  public id:string;
    public name: string ="";
    public amount: number = 0;
    public total: number = 0;
    public preparation: number = 0;
    public ingredients: Array<string>=[];
    constructor( name:string,amount:number, total:number,preparation:number){
      this.name=name;
      this.amount=amount;
      this.preparation=preparation;
    };
  }