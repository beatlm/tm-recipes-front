export class RecipeModel {
  public id:string;
    public name: string ="";
    public comensales: number = 0;
    public totalTime: number = 0;
    public preparingTime: number = 0;
    public ingredients: Array<string>=[];
  }