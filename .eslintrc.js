module.exports = {
    extends: [
        'next',
        'next/core-web-vitals',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:@next/next/recommended'
    ],
    root: true,
    plugins: ['react', '@typescript-eslint'],
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module'
    },
    rules: {
        'prettier/prettier': ['error'],
        'tailwindcss/classnames-order': 'warn',
        'max-lines': ['error', { max: 400, skipComments: true }],
        '@typescript-eslint/camelcase': ['error', { properties: 'always' }],
        'no-console': ['error', { allow: ['warn'] }],
        'no-duplicate-imports': 'error',
        'react/jsx-key': 'error',
        '@typescript-eslint/naming-convention': [
            'error',
            { selector: 'enumMember', format: ['UPPER_CASE'] },
            {
                selector: ['objectLiteralProperty'],
                format: null
            },
            {
                selector: [
                    'parameter',
                    'variable',
                    'function',
                    'classProperty',
                    'typeProperty',
                    'parameterProperty',
                    'classMethod',
                    'objectLiteralMethod',
                    'typeMethod'
                ],
                format: ['camelCase', 'PascalCase']
            },
            {
                selector: ['class', 'interface', 'enum'],
                format: ['PascalCase']
            },
            {
                selector: ['variable'],
                modifiers: ['exported'],
                format: ['PascalCase', 'camelCase', 'UPPER_CASE']
            },
            {
                selector: ['function'],
                modifiers: ['exported'],
                format: ['PascalCase', 'camelCase']
            }
        ],
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-inferrable-types': 'error',
        '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
    },
    settings: {
        tailwindcss: {
            removeDuplicates: true
        }
    },
    'sonarjs/no-duplicate-string': 'warn',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'sonarjs/no-duplicate-string': 'warn'
};
