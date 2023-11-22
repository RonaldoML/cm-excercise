import { taxes } from "../utils/constants";

export class Product {

  name: string;
  quantity: number;
  pricePerUnit: number;
  category: string;
  isImported: boolean;
  tax: number;
  taxedPrice: number;

  constructor(name: string, quantity: number, pricePerUnit: number, category: string, isImported: boolean = false) {
    this.quantity = quantity;
    this.pricePerUnit = pricePerUnit;
    this.category = category;
    this.isImported = isImported;
    this.tax = this.calculateTax();
    this.taxedPrice = this.calculateTaxedPrice();
    this.name = this.rename(name);
  }

  private rename(name: string) {
    return `${this.quantity} ${name}: ${this.taxedPrice.toFixed(2)}`
  }

  private calculateTax() {
    let tempTax = 0.00;
    if (this.isImported) {
      tempTax = (this.pricePerUnit * taxes.imported) / 100;
    }
    if (this.category === "Other") {
      tempTax = tempTax + (this.pricePerUnit * taxes.basic) / 100;
    }
    return this.quantity * tempTax;
  }

  private calculateTaxedPrice() {
    return (this.quantity * this.pricePerUnit) + this.tax;
  }

}