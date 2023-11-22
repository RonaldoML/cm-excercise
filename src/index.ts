import { Product } from "./Classes/Product";
import { data } from "./providers/data";
import { goods } from "./utils/constants";
import { getIsImported, getProductType, refineName } from "./utils/utils";



const listProducts = (receptedProducts: string[][]): Product[][] => {
  let receipts: Array<Product[]> = [];

  receptedProducts.forEach((receipt: string[]) => {
    let products: Array<Product> = [];
    receipt.forEach((product: string) => {
      const name = refineName(product);
      const splittedProduct = product.split(" ");
      const type = getProductType(goods, name);

      const quantity = parseInt(splittedProduct[0]);
      const price = parseFloat(splittedProduct[splittedProduct.length - 1]);
      const productType = type ? type[0] : "Other";
      const isImported = getIsImported(product);
      products.push(new Product(name, quantity, price, productType, isImported));
    });

    receipts.push(products);
  });

  return receipts;
};

const calculateTaxes = () => {
  const receiptArr = listProducts(data);

  const receiptsWithTotals = receiptArr.map(receipt => ({
    Receipt: receipt.map(item => item.name),
    SalesTaxes: receipt.reduce((acc, product) => acc + product.tax, 0.00).toFixed(2),
    Total: receipt.reduce((acc, product) => acc + product.taxedPrice, 0.00).toFixed(2),
  }));
  return receiptsWithTotals;
}

console.log(calculateTaxes());