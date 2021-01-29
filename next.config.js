module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mp3$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'file-loader',
          // eslint-disable-next-line no-dupe-keys
          loader: 'url-loader',
        },
      ],
    });

    return config;
  },
};
