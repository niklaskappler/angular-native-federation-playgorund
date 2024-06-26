const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'mfe2-with-routing',

  exposes: {
    './Component': './projects/mfe2-with-routing/src/app/app.component.ts',
    './routes': './projects/mfe2-with-routing/src/app/app.routes.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ]

});
