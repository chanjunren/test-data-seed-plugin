const ChromeExtensionReloader  = require('webpack-chrome-extension-reloader');
const chromeExtensionReloaderConfig = {
  port: 9090, // Which port use to create the server
  reloadPage: true, // Force the reload of the page also
  entries: { // The entries used for the content/background scripts
    contentScript: 'content-script', // Use the entry names, not the file name or the path
    background: 'background' // *REQUIRED
  }
}

// ** @type {import('next').NextConfig} */

//const plugins = [new ChromeExtensionReloader(chromeExtensionReloaderConfig)]
const plugins = []
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(
      new ChromeExtensionReloader(chromeExtensionReloaderConfig),
    )
    return {
        ...config,
        entry: {
            //...
            ...config.entry,
            background: './background.js' // *This is required
        },
        mode: 'development'
    }
  },
  images: {
    unoptimized: true
  }
}

module.exports = () => plugins.reduce((acc, next) => next(acc), nextConfig)

