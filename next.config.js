module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mp3$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'url-loader',
        },
      ],
    });
    return config;
  },
};
