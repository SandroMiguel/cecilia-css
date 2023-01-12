![Cecilia CSS](dist/img/logo_cecilia_css.png)

# Welcome to Cecilia CSS

![npm](https://img.shields.io/npm/v/cecilia-css?color=%230374B4)
![gzip size](https://img.badgesize.io/SandroMiguel/cecilia-css/master/dist/cecilia.min.css?compression=gzip&color=blue)
[![license](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](LICENSE)

## About

Cecilia CSS is the CSS framework that I use in my personal projects. While it works, its purpose is to do some experiments while not relying on third-party frameworks, which are constantly changing.

-   `lowerCamelCase` classes because they are easier to write in React
-   Small file size: 3kB (minified and gzipped)
-   A responsive grid with 5 breakpoints
-   Built with [flexbox](https://caniuse.com/#feat=flexbox)
-   There is no JavaScript included
-   Only one dependency: [normalize.css](https://github.com/necolas/normalize.css)

Get CSS code [here](dist/cecilia.css)

## Table of Contents

1. [Getting Started](#getting-started)
1. [Browser Support](#browser-support)
1. [Development](#development)
1. [Contributing](#contributing)
1. [Questions](#questions)
1. [Changelog](#changelog)
1. [License](#license)

## Getting Started

### Use from the CDN

The easiest and fastest way.

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/cecilia-css">
```

### Install with npm

Install Cecilia CSS from npm.

```sh
npm i cecilia-css
```

Link the CSS into your page.

```
<link rel="stylesheet" href="public/css/cecilia.min.css">
```

### Install with Yarn

Install Cecilia CSS from Yarn.

```sh
yarn add cecilia-css
```

Link the CSS into your page.

```
<link rel="stylesheet" href="public/css/cecilia.min.css">
```

### Download

Download the [latest release](https://github.com/SandroMiguel/cecilia-css/releases/latest) (entire project) or just
the minified file [cecilia.min.css](https://raw.githubusercontent.com/SandroMiguel/cecilia-css/master/dist/cecilia.min.css)

Copy the `dist/cecilia.min.css` file to your project and link the CSS into your page.

```
<link rel="stylesheet" href="css/cecilia.min.css">
```

## Browser Support

Only modern browsers

## Development

### 1. Clone this repo

```
git clone https://github.com/SandroMiguel/cecilia-css.git
```

### 2. Install dev dependencies

```
yarn install
```

### 3. Create a branch

```
git checkout -b branch-name
```

### 4. Compile your changes

Compile `cecilia.scss` file to `cecilia.css`

```
yarn build
```

### 5. Commit your changes

```
git commit -m "Added a cool stuff"
```

### 6. Push your branch

```
git push origin my-branch
```

### 7. Open a pull request

Open a Pull Request with a clear title and description.

## Contributing

Want to contribute? All contributions are welcome. Please read the [contributing guide](CONTRIBUTING.md).

## Questions

If you have questions tweet me at [@sandro_m_m](https://twitter.com/sandro_m_m) or [open an issue](https://github.com/SandroMiguel/cecilia-css/issues/new).

## Changelog

See [CHANGELOG.md](CHANGELOG.md)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

**~ sharing is caring ~**
