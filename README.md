# Webpack react starter

  * [Wordings](#wordings)
  * [Start developing](#start-developing)
  * [Webpack](#webpack)
    * [index.html](#favicons)
  * [OS and browser detection](#os-and-browser-detection)

## Wordings
 * nhc -> natural hair color
 * nhs -> natural hair shade
 * thc -> target hair color
 * ths -> target hair shade
 
## Start developing

```
npm run webpack:dev
```

## Webpack
Webpack creates a folder **www** and copy all needed files in there.
Javascript, referenced node_modules will be compiled in a single app.js file to **www**.
SCSS will be compiled to a `<style>` tag in the **index.html**.
[Images](./src/img) will be copied in **www**.

### Favicons
[Favicon](./src/img/favicon.png) will be automatically added through [favicons-webpack-plugin](https://github.com/jantimon/favicons-webpack-plugin).

## OS and browser detection
On pageload the body-tag will get classes for operating system and current browser.

```html
<body class="windows edge">
    ...
</body>
```

## Contexts

All context providers are in the [app.jsx](./src/js/app.jsx).

```html
<Consumer>
    {({value}) => (
        ...
    )}
</Consumer>
```

### Localization

The consumer for the localization is in the file [app.jsx](./src/js/app.jsx).
Th localization is passed to all components as `this.props.localization` via [router.jsx](./src/js/router.jsx)

### ColorShades

The consumer is not global.
ColorShadeConsumer has the values `thcWithThs` and `nhcWithNhs`
```html
<ColorShadeConsumer>
    {
    (data) => (
            ...
        )
    }
</ColorShadeConsumer>
```

### User

In this context, every user interaction is stored.
For example if the user allowed the usage of his camera.
Which colors/shades the user choosed.
Also the functionality of forwarding/backwarding the steps.
This is a global context in the [app.jsx](./src/js/app.jsx).
