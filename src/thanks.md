---
title: Thanks for posting something!
layout: layouts/base.njk
header:
  heading: Thanks!
---


## Hooray! You posted something

You can define any page as the thank you page. You came here because the URL of this page was defined as the _action_ of the form.

```html
<form name="contact" action="/thanks" netlify>
```

## Get your submissions

The submissions to your all of your forms are available form the [Admin UI](https://app.netlify.com/sites/{{details.sitename}}/forms), and you can also retrieve them programmatically via an API, and configure notifications and other useful things.

## What next?

Head back to the [list of things to try](/next-steps).

url {{details.url}}
