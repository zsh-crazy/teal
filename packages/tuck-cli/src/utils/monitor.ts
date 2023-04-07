import { error } from './log';
export const errorMonitor = () => {
    process.on('unhandledRejection', (err: any) => {
        error(err);
    });
    process.on('uncaughtException', (err) => {
        error(err.message);
        process.exit(1); //强制性的（根据 Node.js 文档）
    });
};
