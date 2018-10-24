// These properties will be vailable to all of the templates
// and namespaced under the file name.
// (https://www.11ty.io/docs/data-js/)
//
// eg: {{ details.name }}

// console.log(process.env);
var repo = process.env.REPOSITORY_URL
? 'https://' + process.env.REPOSITORY_URL.split('@')[1]
: 'https://github.com/netlify/my-first-few-deploys';
console.log("REPO:", repo);

module.exports = {


  // Your twitter handle
  twitter: null,

  // Your name
  name: null,

  // The event we are at
  event: "Smashing Conference",

  // The repository to which this site is linked
  repo : process.env.REPOSITORY_URL
    ? 'https://' + process.env.REPOSITORY_URL.split('@')[1]
    : 'https://github.com/netlify/my-first-few-deploys',

  // The site name used in the URL of the Netlify Admin UI
  // (Which we can figure out from the deployed URL)
  sitename: process.env.URL
    ? process.env.URL.split('https://')[1].split('.netlify.com')[0]
    : 'playwith',

  // Something to tweet which includes a link to
  // this instance of the example site
  tweet: `I just went from zero to deployed on @Netlify in a matter of seconds!
Take a look at my site at ${process.env.URL || 'https://playwith.netlify.com'}!
#SwitchToNetlify at #SmashingConf`,

  url: process.env.URL

}
