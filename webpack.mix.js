const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.setPublicPath('public');

if (mix.inProduction) {
    mix.disableNotifications();
}

mix.js('assets/js/global.js', 'html/assets/js');

if (!mix.inProduction) {
	mix.sourceMaps();
}

mix.sass('assets/sass/global.scss', 'html/assets/css');

mix.version();
