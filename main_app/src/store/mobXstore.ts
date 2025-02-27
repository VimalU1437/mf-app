import { makeAutoObservable } from "mobx";
import { Product } from "../types";


class SharedStore {
  productList: Product[] = [
  ];
  productViewValue: Product|null = null;
  isProductViewLoading: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  setProductList(value: Product[]) {
    this.productList = value;
  }

  setProductViewValue(value: Product|null) {
    this.productViewValue = value;
  };

  setIsProductViewLoading(value: boolean) {
    this.isProductViewLoading = value;
  };
}

const sharedStore = new SharedStore();

export default sharedStore;
