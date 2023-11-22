const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false
})
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/styles/_variables.scss";`, // 这里可以引入你的全局样式或变量文件
            },
        },
    },
};