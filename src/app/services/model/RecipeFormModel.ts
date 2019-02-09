import { IngredienteModel } from "./IngredienteModel";

export class RecipeFormModel {
  public id: string;
  public title: string = "";
  public image: String;
  public tags: String;
  public amount: number = 0;
  public preparation: number = 0;
  public total: number = 0;
  public ingredientsList: Array<IngredienteModel> = [];
  public pasos: Array<String> = [];

  constructor(
    title: string,
    amount: number,
    total: number,
    preparation: number,
    ingredientsList: Array<IngredienteModel>,
    pasos: Array<String>,
    tags: String,
    image?: String,
  ) {
    this.title = title;
    this.amount = amount;
    this.total = total;
    this.preparation = preparation;
    this.ingredientsList = ingredientsList;
    this.pasos = pasos;
    this.tags=tags;
    this.image = image;
  }
}
