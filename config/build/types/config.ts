export enum BuildMode {
    PROD = 'production',
    DEV = 'development'
}

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
}