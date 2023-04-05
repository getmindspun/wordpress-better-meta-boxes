const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = {
    ...defaultConfig,
    output: {
        filename: '[name].js',
        path: path.join(path.dirname( __dirname ), 'components'),
    },

    entry: {
        'CustomMetaBox': './CustomMetaBox',
    }
};
