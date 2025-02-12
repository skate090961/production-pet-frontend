import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

import { BuildOptions } from './types/config';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const mjsLoader = {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
        resolve: {
            fullySpecified: false,
        },
    };

    const babelLoader = {
        test: /\.(?:js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env'],
                ],
            },
        },
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|icon|webp)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (path: string) => Boolean(path.includes('.module.')),
                        localIdentName: isDev
                            ? '[path][name]__[local]--[hash:base64:8]'
                            : '[hash:base64:8]',
                    },
                },
            },
            'sass-loader',
        ],
    };

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        mjsLoader,
        babelLoader,
        tsLoader,
        styleLoader,
        svgLoader,
        fileLoader,
    ];
}
