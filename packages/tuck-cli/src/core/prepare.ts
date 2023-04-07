import { version } from '../../package.json';
import chalk from 'chalk';
import { rootCheck, userHome, pathExists } from 'tuck-node-utils';

import { NODELOWERVERSION } from '@/constant/index';

const semverValid = require('semver/functions/valid');
const semverGt = require('semver/functions/gt');
export const checkPkgVersion = () => {
    if (!semverValid(version)) {
        throw new Error(chalk.red('package.json中version有误'));
    }
};

export const checkNodeVersion = () => {
    const currentVersion = process.version;
    if (!semverGt(currentVersion, NODELOWERVERSION)) {
        throw new Error(`Node 版本必须大于${NODELOWERVERSION}`);
    }
};

export const checkUserHome = () => {
    const userHomePath = userHome();
    if (!userHomePath || !pathExists(userHomePath)) {
        throw new Error('当前用户用户主目录不存在');
    }
};

const prepareHook = [
    checkPkgVersion,
    checkNodeVersion,
    rootCheck,
    checkUserHome
];

export default prepareHook;
