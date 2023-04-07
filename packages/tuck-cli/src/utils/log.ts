// const log = require('npmlog');
// log.addLevel('success', 3000, { fg: 'green', bold: true });
// log.addLevel('info', 3000, { fg: 'white', bold: true });
// log.addLevel('warn', 3000, { fg: 'yellow', bold: true });
// log.addLevel('error', 3000, { fg: 'red', bold: true });
const log = {
    info: (type, val) => {
        return type + val;
    },
    warn: (type, val) => {
        return type + val;
    },
    success: (type, val) => {
        return type + val;
    },
    error: (type, val) => {
        return type + val;
    }
};
export const info = (value: string) => {
    return log.info(':', value);
};

export const warn = (value: string) => {
    return log.warn(':', value);
};

export const success = (value: string) => {
    return log.success(':', value);
};

export const error = (value: string) => {
    return log.error(':', value);
};
