import { IngredienteModel } from "./IngredienteModel";
import { RecipeFormModel } from "./RecipeFormModel";

export class RecipeModel {
  public id: string;
  public name: string = "";
  public image: String;
  public tags: Array<String> = [];
  public amount: number = 0;
  public preparation: number = 0;
  public total: number = 0;
  public ingredients: Array<IngredienteModel> = [];
  public pasos: Array<String> = [];


static mixData(data:RecipeFormModel, originalData:RecipeModel){
  let mixData: RecipeModel= originalData;
  if(data.amount){
    mixData.name=data.name;
  }
  if(data.total){
    mixData.total=data.total;
  }
  if(data.preparation){
    mixData.preparation=data.preparation;
  }

if(data.image){
  mixData.image= data.image;
}
if(data.name){
  mixData.name= data.name;
}
if(data.tags){
  mixData.tags=data.tags;
}
  return mixData;
}

static fromData(data: RecipeFormModel) {
  console.log("fromData "+data);
  let { id, name, amount, total, preparation,ingredients, pasos, tags, image } = data 
  return new this(name,amount, total, preparation,ingredients, pasos, tags, image);
  
}
 
  constructor(
    name: string,
    amount: number,
    total: number,
    preparation: number,
    ingredients: Array<IngredienteModel>,
    pasos: Array<String>,
    tags: Array<String>,
    image?: String
  ) {
    this.name = name;
    this.amount = amount;
    this.total = total;
    this.preparation = preparation;
    this.ingredients = ingredients;
    this.pasos = pasos;
    this.tags=tags;
    this.image = image;
  }
  
}
