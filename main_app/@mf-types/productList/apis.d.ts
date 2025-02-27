
    export type RemoteKeys = 'productList/productCoupled';
    type PackageType<T> = T extends 'productList/productCoupled' ? typeof import('productList/productCoupled') :any;