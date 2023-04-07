import glob from 'glob';
import { join } from 'path';
import fs from 'fs-extra';
export const mergeScssToFile = ({ basePath, output, fileName }) => {
    const scssList = glob.sync('**/*.scss', {
        cwd: basePath,
        ignore: ['**/demos/**', '**/assets/**']
    });
    if (Array.isArray(scssList) && scssList.length) {
        const data = scssList
            .map((el) => {
                return fs.readFileSync(join(basePath, el), {
                    encoding: 'utf8',
                    flag: 'r'
                });
            })
            .join('\n');
        fs.outputFileSync(
            join(output, `./components/${fileName}/index.scss`),
            data
        );
    }
};
