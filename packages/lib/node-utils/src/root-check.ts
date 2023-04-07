import fs from 'node:fs';
export const isRoot = () => {
    return process.getuid && process.getuid() === 0;
};

const DEFAULT_UIDS = {
    darwin: 501,
    freebsd: 1000,
    linux: 1000,
    sunos: 100
};

export const defaultUid = (platform = process.platform) => {
    return DEFAULT_UIDS[platform];
};

let isDockerCached;

const hasDockerEnv = () => {
    try {
        fs.statSync('/.dockerenv');
        return true;
    } catch {
        return false;
    }
};

const hasDockerCGroup = () => {
    try {
        return fs.readFileSync('/proc/self/cgroup', 'utf8').includes('docker');
    } catch {
        return false;
    }
};

export const isDocker = () => {
    if (isDockerCached === undefined) {
        isDockerCached = hasDockerEnv() || hasDockerCGroup();
    }
    return isDockerCached;
};

export const downgradeRoot = () => {
    if (!isRoot()) {
        return;
    }
    if (
        typeof process.env.SUDO_GID !== 'string' ||
        typeof process.env.SUDO_UID !== 'string'
    ) {
        return;
    }
    if (process.setgid) {
        const gid = Number.parseInt(typeof process.env.SUDO_GID, 10);
        if (gid && gid > 0) {
            process.setgid(gid);
        }
    }
    if (process.setuid) {
        const uid = Number.parseInt(process.env.SUDO_UID, 10) || defaultUid();
        if (uid && uid > 0) {
            process.setuid(uid);
        }
    }
};

export const sudoBlock = (message) => {
    if (isRoot() && !isDocker()) {
        console.error(
            '\x1B[31m%s\x1B[0m',
            message ||
                '不允许您使用root权限运行此应用,您可以通过在PATH中放置｛bold ~/npm/bin｝并运行以下命令来解决权限问题或更改npm存储全局包的位置'
        );
        process.exit(77);
    }
};

export const rootCheck = (message?: string) => {
    try {
        downgradeRoot();
    } catch (e) {
        throw new Error(e.message);
    }
    sudoBlock(message);
};
