const commonConfig = require("./webpack.common.config");

const productionConfig = require("./webpack.production.config");

const developmentConfig = require("./webpack.development.config");

const { merge } = require("webpack-merge");

module.exports = function(env) {
    if (env.development) {
        return merge(commonConfig, developmentConfig)
    }
     else { 
        return merge(commonConfig, productionConfig) 
    }


}