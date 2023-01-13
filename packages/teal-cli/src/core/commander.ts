import { bin, version } from '../../package.json';
import { Command } from 'commander';
const program = new Command();

export const registryCommand = () => {
    program
        .name(Object.keys(bin)[0])
        .usage('<command> [options]')
        .version(version, '-v, --version', 'output the current version');
    program.parse(process.argv);
};
