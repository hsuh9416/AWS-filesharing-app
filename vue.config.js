const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === 'production' ? '/filesharing-app/' : '/filesharing-app/',
    transpileDependencies: true,
    outputDir: './filesharing-app'
})