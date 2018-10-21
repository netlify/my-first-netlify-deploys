---
title: Next steps with Netlify
layout: layouts/base.njk
header:
  heading: Now what?
  subtitle: Some things to try with Netlify
---


## Next steps

Here are some things to experiment with Netlify, once you've deployed your own copy of this site.




### Deploy some changes

This site is generated with a static site generator. And now that you have deployed it, Netlify has set up an automated continuous deployment system for you.  To deploy changes, all you need to do is push your changes to this site's git repository.

Try making a small change. Perhaps by editing the details.js file to add your name. You can do it directly on Github fo you like. Netlify will notice the change and deploy up update in a minute or so.

```js
//  src/data/details.js

module.exports = {
  twitter: '@YouOnTwitter,
  name: 'Your name for the prize draw',
  ...
}
```


### Create a preview build

When you push changes to your master branch (as you did above), Netlify builds and deploys those right away. What if you'd like to stage those changes in a preview? With Netlify's preview builds, the what the effects of a pull request will be.

Try making another change in the git repository. Once again, yu can do this directly on GitHub. Then, instead of commiting this to the master branch, ask GitHub to make a new Pull Request of your changes.


### Give your site a custom name


### Add a form


### Deploy a serverless function


### Define redirect rules



