---
title: Next steps with Netlify
layout: layouts/base.njk
header:
  heading: Now what?
  subtitle: Some things to try out with Netlify and your freshly deployed site
---


## Next steps

Once you've deployed your own copy of this site, here are five things to try as you explore Netlify,

<a name="name">

### 1. Add your name

This site is generated with a static site generator. And now that you have deployed it, Netlify has set up an [automated continuous deployment system](https://www.netlify.com/docs/continuous-deployment/) for you. To deploy changes, all you need to do is push your changes to this site's git repository.

Try making a small change. Perhaps by editing the [details.js]({{details.repo}}/blob/master/src/data/details.js) file to add your name. You can [do it directly on Github]({{details.repo}}/blob/master/src/data/details.js) if you like. Netlify will notice the change and deploy up update in a minute or so.

```js
// src/data/details.js

module.exports = {

  // Your twitter handle
  twitter: null,

  // Your name
  name: null,

  ...
}
```

You can watch the progress of your deploys in the [Netlify Admin for this site](https://app.netlify.com/sites/{{details.sitename}}/deploys). From there you'll also be able to instantly [roll back](https://www.netlify.com/docs/versioning-and-rollbacks/) to any previous deploy if you wanted to.


<a name="deploy-preview">

### 2. Create a deploy preview

When you push changes to your master branch (as you did above), Netlify builds and deploys those right away. What if you'd like to stage those changes in a preview? With Netlify's [deploy previews](https://www.netlify.com/docs/continuous-deployment/#branches-deploys), you can see in advance what the effects of a pull request will be.

Try making another change in the git repository. Once again, you can do this directly on GitHub. Then, instead of committing this to the master branch, ask GitHub to make a new pull request of your changes.

Hmmm, but what to change. It's your site now. Go bananas. Or you could just [amend this page]({{details.repo}}/blob/master/src/next-steps.md) to show your progress by adding a suitably gleeful emoji to the section headings of each of these steps that you've done.

```js
 // Hmmm, what best suggests "done"?

 👍 | 😎 | 👏 | ✅ | 🤘
```


<a name="form">

### 3. Add a form

Although Netlify is deploying your site directly to our global [Application Delivery Network](https://www.netlify.com/features/adn) (ADN), meaning that you don't have a server to maintain, you might still wish to accept form submissions. We can help with that. By adding a standard form element to your site, and giving it a _netlify_ attribute, [we will automatically create the back end for you](https://www.netlify.com/features/#forms), and let you access all form submissions via the [Admin UI](https://app.netlify.com/sites/{{details.sitename}}/forms) or via an [API](https://www.netlify.com/docs/api/#form-submissions).

Try adding the following HTML to a page on this site. After deploying your change, you will find all submissions to your form right there in your [Netlify Admin](https://app.netlify.com/sites/{{details.sitename}}/forms).

```html
<form name="contact" action="/thanks" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
```


<a name="redirects">

### 4. Define redirect rules

The Netlify ADN supports redirect rules. That means that your redirect rules don't run on some an server somewhere (there _is_ no origin server!). Instead, they run directly on the edge nodes located closest to your site users. This makes them blazing fast. But thankfully, not complicated to define.

You can read all about them [in the docs](https://www.netlify.com/docs/headers-and-basic-auth/#structured-configuration). But first, why not try creating some yourself by adding a few lines to the [netlify.toml]({{details.repo}}/blob/master/netlify.toml) file in this repo. This file defines various configurations for Netlify. In addition to defining redirects, proxies, custom 404s, and language redirection rules, you can use it to configure [custom headers](https://www.netlify.com/docs/headers-and-basic-auth/#structured-configuration), set build contexts and lots more.

For now, just add these few lines to your [netlify.toml]({{details.repo}}/blob/master/netlify.toml) to create a new redirect rule.


```makefile

# netlify.toml

...

[[redirects]]
  from = "/next"
  to = "/next-steps"
  status = 302

...

```

Once this has been deployed, you'll be able to access this page via a handy redirect at [/next](/next) and save yourself those extra keystrokes.


<a name="functions">

### 5. Deploy a serverless function



