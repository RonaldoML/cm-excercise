export class Product {

  name: string;
  quantity: number;
  pricePerUnit: number;
  category: string;
  isImported: boolean;
  taxedPrice?: number;

  constructor(name: string, quantity: number, pricePerUnit: number, category: string, isImported: boolean = false) {
    this.name = name;
    this.quantity = quantity;
    this.pricePerUnit = pricePerUnit;
    this.category = category;
    this.isImported = isImported;
  }

  setTaxedPrice(price: number) {
    this.taxedPrice = price;
  }

}