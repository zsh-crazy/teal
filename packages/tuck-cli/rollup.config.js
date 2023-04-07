import { default as nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import pkg from './package.json' assert { type: 'json' };
import commonjs from '@rollup/plugin-commonjs';
import { resolve } from 'path';
import alias from 'rollup-plugin-alias';
export default [
    {
        input: './src/index.ts',
        external: ['readable-stream'],
        output: [
            {
                format: 'cjs',
                file: pkg.main,
                exports: 'named',
                externalLiveBindings: false,
                format: 'cjs',
                freeze: false,
                generatedCode: 'es2015',
                interop: 'default',
			    sourcemap: true, banner: '#! /usr/bin/env node\n',
            }
        ],
        plugins: [
            alias({
                resolve: ['.ts'],
                entries: [
                    { find: '@', replacement: resolve(__dirname, './src') }
                ]
            }),
            nodeResolve({
                exportConditions:['import',"default",'require','node'],
                extensions:['.js','.ts','.json'],
                preferBuiltins:true
            }),
            json(),
            commonjs({
                transformMixedEsModules: true,
                include: /node_modules/
            }),
            typescript({
                tsconfig: './tsconfig.json',
                exclude: ['./node_modules/**']
            }),
            babel({
                babelrc: true,
                include:["./src/**/*.ts"],
                extensions:['.js','.ts','.json'],
                babelHelpers: 'bundled',
                exclude: /node_modules/
            })
        ],

    }
];
