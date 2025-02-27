
    export type RemoteKeys = 'host/store' | 'host/types';
    type PackageType<T> = T extends 'host/types' ? typeof import('host/types') :T extends 'host/store' ? typeof import('host/store') :any;