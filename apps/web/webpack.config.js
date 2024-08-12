const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`

  // Ensure the devServer configuration exists
  if (!config.devServer) {
    config.devServer = {};
  }

  // Set the dev server host to 0.0.0.0 to allow external access
  config.devServer.host = '0.0.0.0';

  return config;
});
