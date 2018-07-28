export class DayModel {
  public dayOfWeek: string;
  public isToday: boolean;
  public isEmpty: boolean;
  public recipeId: string;
  public recipeTitle:string;
  constructor(
    dayOfWeek: string,
    isToday: boolean,
    isEmpty: boolean,
    recipeId: string,
    recipeTitle:string
  ) {
    this.dayOfWeek = dayOfWeek;
    this.isEmpty = isEmpty;
    this.isToday = isToday;
    this.recipeId = recipeId;
    this.recipeTitle=recipeTitle
  }
}
