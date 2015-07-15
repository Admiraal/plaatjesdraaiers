var elixir = require('laravel-elixir');


/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {

    mix.less(["app.less"], "public/assets/css");
    
    mix.version("assets/css/app.css");

	mix.scripts([
	    "../js/app.js"
	],  'public/assets/js/app.min.js');


	mix.scripts([
	    "../bower/jquery/dist/jquery.js",
	    "../bower/bootstrap/dist/js/bootstrap.js",
	], 'public/assets/js/vendor.js');

});