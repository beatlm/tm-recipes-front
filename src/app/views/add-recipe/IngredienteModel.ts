export class IngredienteModel {
  public name: string;
  public amount: number;

  constructor(ingrediente: string, cantidad: number) {
    this.name = ingrediente;
    this.amount = cantidad;
  }
}
