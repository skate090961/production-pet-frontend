import webpack from "webpack";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig";
import {BuildMode, BuildPaths} from "./config/build/types/config";
import path from "path";

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
};

const mode = BuildMode.DEV;
const isDev = mode === BuildMode.DEV;

const config: webpack.Configuration = buildWebpackConfig({
    mode: BuildMode.DEV,
    paths,
    isDev
});

export default config;