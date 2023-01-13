module.exports = {
    env: {
        es6: true,
        node: true,
        jest: true,
        browser: true
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended'
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        parser: '@typescript-eslint/parser'
    },
    plugins: ['vue', '@typescript-eslint']
};
