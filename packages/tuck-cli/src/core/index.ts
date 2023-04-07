import prepareHook from './prepare';
import { registryCommand } from './commander';
export const init = () => {
    prepareHook.forEach((fn) => fn());
    registryCommand();
};
