module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: {
        '@typescript-eslint/no-unused-vars': 'warn',
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'i18next/no-literal-string': ['error', { markupOnly: true, ignoreAttribute: ['as'] }],
        'max-len': ['error', { ignoreComments: true, code: 100 }],
        'import/order': [
            'error',
            {
                groups: [
                    'builtin', // Встроенные модули (например, 'react', 'path')
                    'external', // Внешние зависимости (например, 'lodash', 'axios')
                    'internal', // Внутренние пути (например, '@/components', 'src/utils')
                    ['parent', 'sibling'], // Родительские и соседние файлы (например, '../utils', './styles')
                    'index', // Индексные файлы (например, './index')
                    'object', // Импорты типа import * as something
                    'type', // Импорты типов (например, import type { SomeType } from 'module')
                ],
                pathGroups: [
                    // Группировка для алиасов (например, @/components)
                    {
                        pattern: '@/**',
                        group: 'internal',
                        position: 'after',
                    },
                    // Группировка для стилей (например, CSS/SCSS модулей)
                    {
                        pattern: '*.{css,scss}',
                        group: 'index',
                        position: 'after',
                    },
                ],
                'newlines-between': 'always', // Пустая строка между группами
                alphabetize: {
                    order: 'asc', // Сортировка по алфавиту (A-Z)
                    caseInsensitive: true, // Без учета регистра
                },
                warnOnUnassignedImports: true, // Предупреждать, если импорт не попадает ни в одну группу
            },
        ],
    },
    globals: {
        __IS_DEV__: true,
    },
};
