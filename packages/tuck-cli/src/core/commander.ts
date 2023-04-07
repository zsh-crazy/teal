// import { version } from '../../package.json';
import { Command } from 'commander';
import initProject from '@/commands/init';
const program = new Command();

export const registryCommand = () => {
    // program.version(version, '-v, --version', 'output the current version');

    program
        .command('init <name>')
        .description('init a preact project')
        // .option('-p,--port <port_number>', 'web port')
        .action(initProject);
    program
        .command('docs')
        .option('-p,--port <port_number>', 'web port')
        .action(({ port }) => {
            console.log('build', port);
        });
    program.parse(process.argv);
};
export { Command };
