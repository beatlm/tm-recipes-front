import { IngredienteModel } from "./IngredienteModel";
import { RecipeFormModel } from "./RecipeFormModel";

export class RecipeModel {
  public id: string;
  public title: string = "";
  public imagen: String;
  public tags: Array<String> = [];
  public amount: number = 0;
  public preparation: number = 0;
  public total: number = 0;
  public ingredients: Array<IngredienteModel> = [];
  public pasos: Array<String> = [];

  static mixData(data: RecipeFormModel, originalData: RecipeModel) {
    let mixData: RecipeModel = originalData;
    if (data.amount) {
      mixData.amount = data.amount;
    }
    if (data.total) {
      mixData.total = data.total;
    }
    if (data.preparation) {
      mixData.preparation = data.preparation;
    }
    if (data.image) {
      mixData.imagen = data.image;
    }
    if (data.title) {
      mixData.title = data.title;
    }
    if (data.tags) {
      mixData.tags = data.tags.split(",");
    }
    if(data.ingredientsList){
      mixData.ingredients = data.ingredientsList;
    }
    if(data.pasos){
      mixData.pasos = data.pasos;
    }
    return mixData;
  }

  static fromData(data: RecipeFormModel) {
    console.log("fromData " + data);
    let {
      id,
      title,
      amount,
      total,
      preparation,
      ingredientsList,
      pasos,
      tags,
      image
    } = data;
    //Gestionamos el array de tags
    var newTags = data.tags.split(",");
    return new this(
      title,
      amount,
      total,
      preparation,
      ingredientsList,
      pasos,
      newTags,
      image
    );
  }

  constructor(
    title: string,
    amount: number,
    total: number,
    preparation: number,
    ingredients: Array<IngredienteModel>,
    pasos: Array<String>,
    tags: Array<String>,
    image?: String
  ) {
    this.title = title;
    this.amount = amount;
    this.total = total;
    this.preparation = preparation;
    this.ingredients = ingredients;
    this.pasos = pasos;
    this.tags = tags;
    this.imagen = image;
  }
}
