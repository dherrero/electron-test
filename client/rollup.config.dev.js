import config from './rollup.config.js';

config.plugins.pop(); //remove uglify

config.sourceMap = true;
config.sourceMapFile = 'dist/app.js.map'
export default config;