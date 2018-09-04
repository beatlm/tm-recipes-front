export class PlannerModel {
    public userId: string;
    public date: string;
    public recipeId: string;
    constructor(
      userId: string,
      date: string,
      recipeId: string
    ) {
      this.userId = userId;
      this.date = date;
      this.recipeId = recipeId;
    }
  }
  