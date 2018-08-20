export class PlannerModel {
    public userId: string;
    public date: Date;
    public recipeId: string;
    constructor(
      userId: string,
      date: Date,
      recipeId: string
    ) {
      this.userId = userId;
      this.date = date;
      this.recipeId = recipeId;
    }
  }
  