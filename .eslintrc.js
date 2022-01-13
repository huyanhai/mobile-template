module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
    '@vue/typescript/recommended',
    '@vue/typescript',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 1 : 0, //禁用 console
    'no-debugger': process.env.NODE_ENV === 'production' ? 1 : 0, //禁用 debugger
    'no-var': 1, //禁用var，用let和const代替
    'no-unused-vars': [2, { vars: 'all', args: 'after-used' }], //不能有声明后未被使用的变量或参数
    'no-use-before-define': 2, //未定义前不能使用
    'no-undef': 2, //不能有未定义的变量
    'no-redeclare': 2, //禁止重复声明变量
    'no-const-assign': 2, //禁止修改const声明的变量
    'default-case': 2, //switch语句最后必须有default
    '@typescript-eslint/explicit-module-boundary-types': 'off', // ts每个函数都要显式声明返回值
    '@typescript-eslint/no-var-requires': 0, // 允许require
    '@typescript-eslint/no-explicit-any': 'off', // 可以使用any
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    'vue/multi-word-component-names': ['off'], // vue组件名称校验 (默认为多单词)
  },
};
