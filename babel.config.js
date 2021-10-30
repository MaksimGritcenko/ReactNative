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
    ],
  };
};
