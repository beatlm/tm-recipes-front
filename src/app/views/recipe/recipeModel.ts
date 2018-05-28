import { IngredienteModel } from "../add-recipe/IngredienteModel";

export class RecipeModel {
  public id:string;
    public name: string ="";
    public amount: number = 0;
    public total: number = 0;
    public preparation: number = 0;
    public ingredients: Array<IngredienteModel>=[];
    constructor( name:string,amount:number, total:number,preparation:number, ingredients:Array<IngredienteModel>){
      this.name=name;
      this.amount=amount;
      this.preparation=preparation;
      this.ingredients=ingredients;
    };
  }