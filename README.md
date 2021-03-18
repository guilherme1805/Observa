# Observa

Observa is a web extension that allows you to read [Observador](https://observador.pt) premium news without having a subscription.


## Installation

It's currently available for Firefox ~~and Chrome~~ (coming soon):

* [Download in Firefox Add-ons](https://addons.mozilla.org/firefox/addon/observa)

<!-- - [Download in Chrome Web store]() -->

### For uBlock Origin Users

If you use uBlock Origin I highly advise you not to use this extension. Alternatively, you should add this filters to your uBlock Origin configuration:

```
! https://observador.pt
observador.pt##body.premium-article:not(.premium-user) .article-body p:not(:first-child):style(opacity: 1 !important; visibility: visible !important;)
observador.pt##body.premium-article:not(.premium-user) .article-body:not(:first-child):style(opacity: 1 !important; visibility: visible !important;)
observador.pt##body.premium-article:not(.premium-user) .article-block:style(opacity: 1 !important; visibility: visible !important;)
observador.pt##body.premium-article:not(.premium-user) .premium-paywall:style(display: none;)
```

## Running Observa Locally
### Requirements

You'll need:
- Node.js, 10.0.0 or higher
- npm, 5.6.0 or higher is recommended

### Using Observa

To use Observa, follow these steps:

* Install dependencies: `npm install`

  * Run Firefox add-on: `npm run start:firefox`
  * Run Chrome extension: `npm run start:chrome`


## Built With

* [Web-ext](https://github.com/mozilla/web-ext) - Tool to help build, run, and test WebExtensions

## Contact

If you want to contact me you can reach me at <guilherme.1805.oliveira@gmail.com>.



