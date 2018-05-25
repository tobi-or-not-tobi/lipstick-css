# Lipstick CSS

This is a sandbox project that demonstrate styling of components in two ways:

*   at build time
*   at runtime

It aims use both approaches to style for application components, external components (from a library)or even external webcomponents. The 2 approaches should not exclude each other, and most likely both will be used combined.

<details>
<summary>Installation instructions</summary>
This is an angular application, build with the angular-cli. It can be installed with npm or yarn, using common installation

Installation: `npm install`

Start dev server: `npm start`

</details>

<details>
<summary>Dependencies</summary>
The application is using a small embedded library that contains some sample components. This is to demonstrates how an external component can be styled with the application styles (next step is to introduce a second application that reuses the component with different styles).

The application is using Bootstrap as a third party UI library, so that we can demonstrate styling of components using a third-party UI library.

</details>

# Motivation

## CSS at build time: pre-processing

Build time configurations for CSS are fairly standard, using a pre-processor such as SASS. Most modern UI libraries (such as bootstrap) are using sass under the hood and allow to override the standard variables. Using a pre-processor for CSS development is highly recommended.

Pre-processing of css files has some disadvantages, for example, it depends on a (re)build of the code. More over, after a CSS rule change has been rebuild a new _deployment_ is also required. Given that the CSS layer of a web application is typically full of rules that are shared among multiple components, a single change (i.e. primary color) might require a full rebuild and deployment of the code base. Last but not least, the cached static resources must be evicted from cache and a new CSS file(s) must be loaded.

This is no problem during normal application development, but in case we build a template site, that needs to be adapted in the cloud, we like to have a configurable approach that doesn't require a lot of processing. This where runtime configuration kicks in.

## Runtime configuration: CSS variables

After build and deployment, we end up with static resources. The CSS file(s) are deployed on a webserver or CDN, and if we like to change the style, we need to start a new development cycle and deploy the app once more.

There are several use-cases for changing the layout and design at runtime:

*   Configurable applications, running in the cloud, should allow for quick changes without rebuild and deployments.
*   Allow business users to configure the application theme.
*   Provide a microsite architecture with a style layer, driven by the hosting application. Webcomponents can be loaded from a URL and reused by multiple application. The hosting application should allow to override the css.

CSS variables are a relatively new standard which has [great adoption in most browsers](https://caniuse.com/#feat=css-variables). CSS variables are working in conjunction to css pre-processors.

## TODO

This initial work already brings up some questions that need to be tackled going forward:

*   How do we style an external web component? These components have been build and will most likely be reused by a number of apps.
*   Do we need to partially rebuild external UI libraries, if we want to support CSS variables?
*   Where to maintain the CSS rules?

## Other tools and techniques

*   Autoprefixer is a PostCSS plugin which parses CSS and add vendor prefixes to CSS rules. It doesn't interfere with the concepts, as it will generate additional selectors at build time that will not be influenced by pre-processors or CSS vars.
*   More and more frameworks isolate CSS rules for specific components.
