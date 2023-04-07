import inquirer from 'inquirer';
import { error } from '@/utils/log';
export const inquirerList = (list) => {
    return new Promise((resolve) => {
        inquirer
            .prompt(list)
            .then((answers) => {
                resolve(answers);
            })
            .catch((e) => {
                error(e.toString());
                resolve(null);
            });
    });
};
