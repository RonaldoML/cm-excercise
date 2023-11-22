// Input 1:
// ```
// 2 book at 12.49
// 1 music CD at 14.99
// 1 chocolate bar at 0.85

// Output 1:
// ```
// 2 book: 24.98
// 1 music CD: 16.49
// 1 chocolate bar: 0.85
// Sales Taxes: 1.50
// Total: 42.32
// ```

import { Product } from "./Product";
import { data } from "./providers/data";
import { goods, taxes } from "./utils/constants";



const listProducts = (receptedProducts: string[][]) => {
  let receipts: Array<Product[]> = [];

  receptedProducts.forEach((receipt: string[]) => {
    let products: Array<Product> = [];
    receipt.forEach((product: string) => {
      const splittedProduct = product.split(" ");
      const quantity = parseInt(splittedProduct[0]);
      const isImported = (/(imported)/i).test(product);
      const name = product.replace(/[0-9]/g, '').replace(/\./, '').replace(" at ", " ").trim();
      const type = Object.entries(goods).find(good => good[1].some(item => name.split(' ').includes(item)));
      const price = parseFloat(splittedProduct[splittedProduct.length - 1]);
      const productType = type ? type[0] : "Other";
      products.push(new Product(name, quantity, price, productType, isImported));
    });

    receipts.push(products);
  });

  return receipts;
};

console.log(listProducts(data));