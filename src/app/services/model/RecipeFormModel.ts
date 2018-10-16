import { IngredienteModel } from "./IngredienteModel";

export class RecipeFormModel {
  public id: string;
  public name: string = "";
  public amount: number = 0;
  public total: number = 0;
  public preparation: number = 0;
  public ingredients: Array<IngredienteModel> = [];
  public pasos: Array<String> = [];
  public tags: Array<String> = [];
  public imagen: String;
  public pasoActual: string;
  public ingredienteActual: String;

  constructor(
    name: string,
    amount: number,
    total: number,
    preparation: number,
    ingredients: Array<IngredienteModel>,
    pasos: Array<String>,
    tags: Array<String>,
    imagen?: String,
  ) {
    this.name = name;
    this.amount = amount;
    this.total = total;
    this.preparation = preparation;
    this.ingredients = ingredients;
    this.pasos = pasos;
    this.tags=tags;
    this.imagen = imagen;
  }
}