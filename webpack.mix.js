let mix = require('laravel-mix');

mix.js('resources/js/app.js', 'assets/js/app.js')

mix.sass('resources/scss/reset.scss', 'assets/css/reset.css')
    .sass('resources/scss/dashboard.scss', 'assets/css/dashboard.css')
