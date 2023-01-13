module.exports = function () {
    const presets = [
        [require('@babel/preset-env')],
        [require('@babel/preset-typescript')],
        [
            require('@babel/preset-react'),
            {
                runtime: 'automatic',
                importSource: 'preact-auto-clsx'
            }
        ]
    ];
    const plugins = [
        [
            require('@babel/plugin-transform-runtime'),
            {
                absoluteRuntime: false,
                corejs: 3,
                helpers: true,
                regenerator: true,
                useESModules: true
            }
        ],
        [require('@babel/plugin-proposal-class-properties')]
    ];
    return {
        sourceType: 'unambiguous',
        overrides: [
            {
                exclude: [/@babel[/|\\\\]runtime/, /core-js/],
                presets,
                plugins
            }
        ]
    };
};
