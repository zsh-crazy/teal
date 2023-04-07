import { isRoot } from './root-check';
import fs, { promises as fsPromises } from 'node:fs';
const os = require('os');
const homedir = () => {
    const env: any = process.env;
    const home = env.HOME;
    const user = env.LOGNAME || env.USER || env.LNAME || env.USERNAME;
    if (process.platform === 'win32') {
        return env.USERPROFILE || env.HOMEDRIVE + env.HOMEPATH || home || null;
    }

    if (process.platform === 'darwin') {
        return home || (user ? '/Users/' + user : null);
    }

    if (process.platform === 'linux') {
        return home || (isRoot() ? '/root' : user ? '/home/' + user : null);
    }

    return home || null;
};

export const userHome = typeof os.homedir === 'function' ? os.homedir : homedir;

export const pathExists = async (path) => {
    try {
        await fsPromises.access(path);
        return true;
    } catch {
        return false;
    }
};

export const pathExistsSync = (path) => {
    try {
        fs.accessSync(path);
        return true;
    } catch {
        return false;
    }
};
