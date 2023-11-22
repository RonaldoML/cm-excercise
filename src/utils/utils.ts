import { GoodsType } from "./types";

export const refineName = (name: string) => {
  return name.replace(/[0-9]/g, '').replace(/\./, '').replace(" at ", " ").trim();
};

export const getProductType = (goods: GoodsType, name: string) => {
  return Object.entries(goods).find(good => good[1].some(item => name.split(' ').includes(item)));
};

export const getIsImported = (product: string) => {
  return (/(imported)/i).test(product);
}