export class DayModel {
  public user: string;
  public day: Date;
  public recipeId: string;
  constructor(
    user: string,
    day: Date,
    recipeId: string
  ) {
    this.user = user;
    this.day = day;
    this.recipeId = recipeId;
  }
}
