const { override,addDecoratorsLegacy,disableEsLint, addLessLoader } = require('customize-cra');
module.exports = override(
    addDecoratorsLegacy(),
    // disable eslint in webpack
    disableEsLint(),
    addLessLoader({
        lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
            javascriptEnabled: true,
            modifyVars: { '@primary-color': '#1DA57A' },
        },
    }),
);