export class RecipeModel {
  public id:string;
    public name: string ="";
    public amount: number = 0;
    public total: number = 0;
    public preparation: number = 0;
    public ingredients: Array<string>=[];
  }