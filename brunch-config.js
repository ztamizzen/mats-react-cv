// See http://brunch.io for documentation.
module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'app.js': /^app/,
        'vendor.js': /^node_modules/
      }
    },
    stylesheets: {
      joinTo: 'app.css',
    }
  },
  plugins: {
    babel: {
      presets: ['latest', 'react']
    }
  },
  npm: {
    enabled: true,
    globals: {
      jQuery: 'jquery',
      $: 'jquery',
      bootstrap: 'bootstrap'
    },
    styles: {
      bootstrap: ['dist/css/bootstrap.css']
    }
  }
};
