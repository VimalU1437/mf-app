import { makeAutoObservable } from "mobx";
import { Product } from "../types";


class SharedStore {
  productList: Product[] = [
  ];
  productViewValue: Product|null = null;
  isProductViewLoading: boolean = true;
  productInCart: Product[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setProductList = (value: Product[]) => {
    this.productList = value;
  }

  setProductViewValue = (value: Product|null) => {
    this.productViewValue = value;
  };

  setIsProductViewLoading = (value: boolean) => {
    this.isProductViewLoading = value;
  };

  addProductInCart = (value: Product) => {    // arrow function for bind this
    this.productInCart.push(value);
  };

  deleteProductInCart = (value: String) => {
    this.productInCart = this.productInCart.filter((product) => product.sku !== value);
  };

}

const sharedStore = new SharedStore();

export default sharedStore;
