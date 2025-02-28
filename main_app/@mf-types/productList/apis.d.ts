
    export type RemoteKeys = 'productList/ProductCoupledView';
    type PackageType<T> = T extends 'productList/ProductCoupledView' ? typeof import('productList/ProductCoupledView') :any;