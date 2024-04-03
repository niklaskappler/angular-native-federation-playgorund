const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  remotes: {
    "nestedRouterScrolling": "http://localhost:4200/remoteEntry.js",
    "mfe1": "http://localhost:4200/remoteEntry.js",
    "mfe2WithRouting": "http://localhost:4200/remoteEntry.js",
    "mfe3": "http://localhost:4200/remoteEntry.js",    
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
