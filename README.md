
## Overview

https://playwith.netlify.com

A small example site to generate and deploy.

## Clone and deploy with a click

You can get started with your own version of this site with a couple of clicks. the button below will cline this repo to your own GitHub account and link it to a new site for you on [Netlfy](https://www.netlify.com)

<!-- Markdown snippet -->
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/my-first-netlify-deploys)

...or you can clone it down to your local development machine and run build it there before deploying, if you prefer.

## Local development

To build the site you need:

- [Node](https://nodejs.org) - to run the build
- [Yarn](https://yarnpkg.com) - to install an manage dependencies


### Getting started

```bash

# clone this repository
git clone git@github.com:netlify/my-first-netlify-deploys.git

# go to the working directory
cd my-first-netlify-deploys

# install dependencies
yarn

# start a local build server with hot reloading
yarn start
```

## Deployment

The build command `yarn run build` will generate a set of static assets in a `dist` folder which can be deployed to any web hosting service.

[Netlify](http://www.netlify.com) will run this build process in a CI environment and then deploy the build automatically to a global CDN. Such deployments are [triggered automatically](https://www.netlify.com/docs/continuous-deployment/) by every git push to the `master` branch of the origin repository.




