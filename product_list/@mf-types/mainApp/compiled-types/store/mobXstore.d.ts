import { Product } from "../types";
declare class SharedStore {
    productList: Product[];
    productViewValue: Product | null;
    isProductViewLoading: boolean;
    constructor();
    setProductList(value: Product[]): void;
    setProductViewValue(value: Product | null): void;
    setIsProductViewLoading(value: boolean): void;
}
declare const sharedStore: SharedStore;
export default sharedStore;
