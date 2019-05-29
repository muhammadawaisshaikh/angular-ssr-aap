# angular-ssr-aap
Angular Universal &amp; Server-side rendering

# Refrences 
https://medium.com/@MarkPieszak/angular-universal-server-side-rendering-deep-dive-dc442a6be7b7
https://alligator.io/angular/angular-universal/

# Steps: 

ng new some-amazing-project

ng add @nguniversal/express-engine --clientProject some-amazing-project

// angular.json
{ ...
  "projects": {
    "some-amazing-project": {}
}

// Dynamic SSR
npm run build:ssr && npm run serve:ssr

// Static Pre-Rendering
npm run build:prerender && npm run serve:prerender