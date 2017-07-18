# Aloha README

This is a demo homepage for the aloha apparel company.

![homepage](https://cdn.pbrd.co/images/GBvCrFQ.png)

Technology summary:

- built with html5 and css3

- jQuery for animations and interactivity

- attempted to reverse engineer the flickity intialization script by making a custom data-attrbute and passing it the carousel options

- replaced the native javascript alert function with a fancyalert box message using jquery

Todos:

-gulpfile broken: need to add scripts to package.json, need to properly inplement browsersync, failed to use uglify and rename with autoprefixer within pump (something to do with vinyl sourcemaps) (was working before but broke when tried to implement browsersync)

-Why isn't @font-face working when you set font-family as css variables in :root??? research this

-css validator is registering all uses of css variables as invalid includoing assignment in :root and use as properties with var(--). Possible that this spec is too bleeding-edge and the validator hasn't been updated. It's showing a total of 32 Errors all related to this, making the judgment call of leaving it. Research shows 72.16% coverage on Can I use, however this will neagtively affect old versions of Internet Explorer.
