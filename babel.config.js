module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            store: './src/store',
            components: './src/components',
            screens: './src/screens'
          },
        },
      ],
      ["module:react-native-dotenv", {
        "moduleName": "@env",
        "path": ".env",
        "blocklist": null,
        "allowlist": null,
        "blacklist": null, // DEPRECATED
        "whitelist": null, // DEPRECATED
        "safe": false,
        "allowUndefined": true,
        "verbose": false
      }]
    ],
  };
};
