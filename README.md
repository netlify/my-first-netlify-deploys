
## Overview

...


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

[Netlify](http://www.netlify.com) will run this build process in a CI environment and then deploy the build to automatically to a global CDN. Such deployments are [triggered automatically](https://www.netlify.com/docs/continuous-deployment/) by every git push to the `master` branch of the origin repository.




