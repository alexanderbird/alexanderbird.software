# alexanderbird.software
A classic resume website... excessively customized technical stack when there
are plenty out of the box tools that would do just as well 😅

## Architecture
 - content is in **YAML** files
   - in separate files because I like editing my copy as a separate activity from the web dev part
   - in yaml files because I find the format convenient for copy writing and for ingestion (especially multiline strings and alias/repeated nodes)
 - HTML templating is done with **[Handlebars](https://handlebarsjs.com/)** -- a lightweight templating engine is plenty for what I need
   - I have considered a full JS frontend framework (say, React or Angular) and prerendering all the pages, but it hasn't seemed worth it yet
 - HTML partials are sorted according to **[Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)** categories because I find it convenient
 - CSS is written in **SASS** and stored next to the relevant HTML partial
   - I'm using **[BEM](http://getbem.com/naming/)** with the notable exception that each class name is prefixed with the Atomic group it's part of -- e.g. `molecules__tech-stack__box`
 - When YAML content needs to be transformed before being rendered, that transformation happens in `/gulp/utils/handlebars-helpers.js` 
 - I'm not running client side JavaScript (except for a few trivial lines) because I wanted to explore using CSS `:target` selector to change state with CSS
   - I thought this website would be a good opportunity to experiment with the technique so I could learn more about CSS
 - Icons are **SVG**s, combined using [gulp-svg-sprite](https://github.com/jkphl/gulp-svg-sprite) and displayed with SVG `<use href='icon-name'></use>`
   - I've made the icons from scratch (because I like that I can customize them, and to learn more about SVG)
   - colors (sometimes multiple for one icon) are set with CSS custom properties. 
     - In the SVG: `stroke: var(--icon-color-primary, #000)`
     - In the CSS for that use of the icon: `--icon-color-primary: yellow;`

## Deployment

Netlify -- because it just works.

[![Netlify Status](https://api.netlify.com/api/v1/badges/59a8cb3e-65e6-4db6-a9ac-1cdd87f68068/deploy-status)](https://app.netlify.com/sites/alexanderbird-software/deploys)

## Development

    npm run dev
