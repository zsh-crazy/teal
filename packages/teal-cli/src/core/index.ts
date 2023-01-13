import { preCheck } from './prepare';
import { registryCommand } from './commander';
export const init = () => {
    preCheck();
    registryCommand();
};
