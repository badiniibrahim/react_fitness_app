module.exports = {
    extends: [

    ],
    plugins: ['react', '@typescript-eslint', 'jest', 'react-hooks'],
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    rules: {
        'linebreak-style': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        'no-plusplus': 'off',
        'no-param-reassign': 0,
        'jest/expect-expect': 'off',
        'react/jsx-props-no-spreading': ['off'],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-curly-brace-presence': 'off',
        'no-useless-rename': 0,
        'react/jsx-curly-brace-presence': 'off',
        '@typescript-eslint/ban-types': 'off',
        'no-underscore-dangle': 'off',
        'consistent-return': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        'prefer-template': 'off',
        'array-callback-return': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-use-before-define': 'off',
        'no-console': 'off',
        "spaced-comment": 0,
        "react/self-closing-comp": "off",
        "jsx-a11y/label-has-associated-control": "off",
        "dot-notation": "off",
        "@typescript-eslint/dot-notation": ["error"],
        "jsx-a11y/anchor-is-valid": 0,
        "react/prop-types": "off",
        "react/forbid-prop-types": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "jsx-a11y/no-noninteractive-element-interactions": 0,
        "jsx-a11y/label-has-for": 0,
        "react/jsx-closing-tag-location": 0,
        'prettier/prettier': 0,



    },
};
