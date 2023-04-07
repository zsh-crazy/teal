import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';
import commonjs from '@rollup/plugin-commonjs';
import { resolve } from 'path';
import dts from 'rollup-plugin-dts';
import del from 'rollup-plugin-delete';
import alias from 'rollup-plugin-alias';

export default [
    {
        input: './src/index.ts',
        output: [
            { format: 'cjs', file: pkg.main },
            { format: 'esm', file: pkg.module, exports: 'auto' }
        ],
        plugins: [
            alias({
                resolve: ['.ts'],
                entries: [
                    { find: '@', replacement: resolve(__dirname, './src') }
                ]
            }),
            nodeResolve({
                exportConditions: ['node']
            }),
            commonjs(),
            json(),
            typescript({
                tsconfig: './tsconfig.json'
            }),
            babel({
                babelHelpers: 'bundled',
                extensions: ['.ts'],
                exclude: /node_modules/
            })
        ]
    },
    {
        input: './src/index.ts',
        output: [{ file: resolve(__dirname, 'dist/index.d.ts'), format: 'es' }],
        plugins: [
            dts.default(),
            process.env.NODE_ENV === 'production'
                ? del({ hook: 'buildEnd', targets: './dist/types' })
                : []
        ]
    }
];
