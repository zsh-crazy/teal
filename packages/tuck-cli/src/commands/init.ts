// import { gitInit } from '@/module/git/init';
import { inquirerList } from '@/core/util';

const initProject = async (name: string, { port }) => {
    console.log('初始化项目', name, port);
    const data = await inquirerList([
        {
            type: 'input',
            name: 'describe',
            message: '请输入项目介绍:',
            default: ''
        },
        {
            type: 'list',
            name: 'langeType',
            message: '请选择项目应用语言场景:',
            default: 'oversea',
            choices: [
                {
                    value: 'oversea',
                    name: '国外'
                },
                {
                    value: 'local',
                    name: '国内'
                }
            ]
        },
        {
            type: 'list',
            name: 'deviceType',
            message: '请选择项目应用设备类型:',
            default: 'oversea',
            choices: [
                {
                    name: '横屏',
                    value: 'horizontal'
                },
                {
                    name: '竖屏',
                    value: 'vertical'
                }
            ]
        }
    ]);
    if (!data) {
        return;
    }
};

export default initProject;
