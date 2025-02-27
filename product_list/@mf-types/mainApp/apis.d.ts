
    export type RemoteKeys = 'mainApp/mobXStore' | 'mainApp/types' | 'mainApp/spinner' | 'mainApp/error';
    type PackageType<T> = T extends 'mainApp/error' ? typeof import('mainApp/error') :T extends 'mainApp/spinner' ? typeof import('mainApp/spinner') :T extends 'mainApp/types' ? typeof import('mainApp/types') :T extends 'mainApp/mobXStore' ? typeof import('mainApp/mobXStore') :any;