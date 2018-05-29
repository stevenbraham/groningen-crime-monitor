const elixir = require('laravel-elixir');
require('laravel-elixir-html-minify');

elixir.config.assetsPath = 'src';
elixir.config.publicPath = 'dist';
elixir.config.viewPath = './';

elixir(function (mix) {

    mix.webpack('app.js');
    mix.sass('style.scss');
    mix.copy('src/index.html', 'dist');
    mix.copy('src/images', 'dist/images');
    if (elixir.config.production) {
        mix.html('dist/**/*.html', 'dist', 'dist');
    }

});