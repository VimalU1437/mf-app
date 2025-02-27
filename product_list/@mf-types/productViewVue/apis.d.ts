
    export type RemoteKeys = 'productViewVue/mountProductView';
    type PackageType<T> = T extends 'productViewVue/mountProductView' ? typeof import('productViewVue/mountProductView') :any;