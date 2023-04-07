import glob from 'glob';
import fsExtra from 'fs-extra';
import type { PluginOption } from 'vite';
import { resolve } from 'path';
import { mergeScssToFile } from './utils';
import fs from 'fs-extra';
const VitePluginCopyDest = (options: any): PluginOption => {
    return {
        name: 'vite-plugin-merge-scss',
        apply: 'build',

        closeBundle() {
            if (!fsExtra.existsSync) {
                fsExtra.ensureDirSync(
                    resolve(options.include, '../dist/styles')
                );
            }
            fsExtra.copySync(
                resolve(options.rootPath, './src/styles'),
                resolve(options.rootPath, './dist/styles')
            );
            const stylesList = glob.sync('**/*.scss', {
                cwd: resolve(options.rootPath, './dist/styles')
            });
            const fileStr = stylesList
                .map((path) => {
                    return `@import './styles/${path}';`;
                })
                .join('\n');
            const componentFolderList = glob.sync('*', {
                cwd: options.input
            });
            componentFolderList.forEach((name) => {
                mergeScssToFile({
                    basePath: resolve(options.input, name),
                    output: options.output,
                    fileName: name
                });
            });
            const newComponentFolders = glob.sync('**/*.scss', {
                cwd: resolve(options.rootPath, './dist/components')
            });
            const componentStr = newComponentFolders
                .map((el) => {
                    return `@import './components/${el}';`;
                })
                .join('\n');

            fsExtra.outputFileSync(
                resolve(options.rootPath, './dist/index.scss'),
                options.injectStyle('scss') +
                    '\n' +
                    fileStr +
                    '\n' +
                    componentStr
            );
            const data = fs.readFileSync(
                resolve(options.rootPath, './dist/style.css'),
                {
                    encoding: 'utf8',
                    flag: 'r'
                }
            );
            fs.outputFileSync(
                resolve(options.rootPath, './dist/style.css'),
                options.injectStyle('css') + '\n' + data
            );
        }
    };
};

export default VitePluginCopyDest;
