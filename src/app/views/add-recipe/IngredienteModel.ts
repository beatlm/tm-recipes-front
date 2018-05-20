export class IngredienteModel {
  public ingrediente: string;
  public cantidad: number;

  constructor(ingrediente: string, cantidad: number) {
    this.ingrediente = ingrediente;
    this.cantidad = cantidad;
  }
}
