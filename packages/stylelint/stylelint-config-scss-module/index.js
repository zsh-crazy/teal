'use strict';
module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-recommended-scss'],
    rules: {
        // scss
        'selector-class-pattern': [
            // 命名标准 -
            '^([a-z][a-z0-9]*)(_[a-z0-9]+)*$',
            {
                message: 'Expected class selector to be kebab_case'
            }
        ],
        'scss/dollar-variable-pattern': /^([a-z][a-z0-9]*)(_[a-z0-9]+)*/,

        'at-rule-empty-line-before': [
            'always',
            {
                except: ['blockless-after-blockless', 'first-nested'],
                ignore: ['after-comment'],
                ignoreAtRules: ['else']
            }
        ],
        'block-closing-brace-newline-after': [
            'always',
            {
                ignoreAtRules: ['if', 'else']
            }
        ],
        'import-notation': 'string',
        'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
        'scss/at-else-closing-brace-space-after': 'always-intermediate',
        'scss/at-else-empty-line-before': 'never',
        'scss/at-else-if-parentheses-space-before': 'always',
        'scss/at-function-parentheses-space-before': 'never',
        'scss/at-function-pattern': [
            '^(-?[a-z][a-z0-9]*)(-[a-z0-9]+)*$',
            {
                message: 'Expected function name to be kebab-case'
            }
        ],
        'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
        'scss/at-if-closing-brace-space-after': 'always-intermediate',
        'scss/at-mixin-argumentless-call-parentheses': 'never',
        'scss/at-mixin-parentheses-space-before': 'never',
        'scss/at-mixin-pattern': [
            '^(-?[a-z][a-z0-9]*)(-[a-z0-9]+)*$',
            {
                message: 'Expected mixin name to be kebab-case'
            }
        ],
        'scss/at-rule-conditional-no-parentheses': true,
        'scss/dollar-variable-colon-space-after': 'always',
        'scss/dollar-variable-colon-space-before': 'never',
        'scss/dollar-variable-empty-line-before': [
            'always',
            {
                except: ['after-dollar-variable', 'first-nested'],
                ignore: ['after-comment', 'inside-single-line-block']
            }
        ],
        'scss/double-slash-comment-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['between-comments', 'stylelint-commands']
            }
        ],
        'scss/double-slash-comment-whitespace-inside': 'always',
        'scss/percent-placeholder-pattern': [
            '^(-?[a-z][a-z0-9]*)(-[a-z0-9]+)*$',
            {
                message: 'Expected placeholder to be kebab-case'
            }
        ],

        //css-module
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: [
                    'export',
                    'import',
                    'global',
                    'local',
                    'external'
                ]
            }
        ],
        'selector-type-no-unknown': [
            true,
            {
                ignoreTypes: ['from']
            }
        ],
        'property-no-unknown': [
            true,
            {
                ignoreProperties: ['composes', 'compose-with'],
                ignoreSelectors: [':export', /^:import/]
            }
        ],
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['value']
            }
        ],
        'function-no-unknown': [
            true,
            {
                ignoreFunctions: ['global']
            }
        ]
    },
    overrides: [
        {
            files: '**/*.scss',
            plugins: ['stylelint-scss'],
            rules: {
                'at-rule-no-unknown': null,
                'scss/at-rule-no-unknown': [
                    true,
                    {
                        ignoreAtRules: ['value']
                    }
                ],
                'function-no-unknown': null,
                'scss/function-no-unknown': [
                    true,
                    {
                        ignoreFunctions: ['global']
                    }
                ]
            }
        }
    ],
    ignoreFiles: [
        'node_modules/**/*',
        '**/*.js',
        '**/*.jsx',
        '**/*.tsx',
        '**/*.ts',
        '**/*.vue'
    ]
};
