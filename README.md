[TYPESCRIPT__BADGE]: https://img.shields.io/badge/typescript-D4FAFF?style=for-the-badge&logo=typescript
[JEST]: https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white
[SASS]: https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white
[HTML5]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
<h1 align="center" style="font-weight: bold;">Esbuild Boilerplate 💻</h1>

![typescript][TYPESCRIPT__BADGE] ![SASS][SASS] ![Jest][JEST] ![HTML5][HTML5]

<p align="center">
 <a href="#about">About</a> • 
 <a href="#prerequisites">Prerequisites</a> • 
 <a href="#main-features">Main Features</a> •  
 <a href="#starting">Starting</a> •  
 <a href="#scaffolding">Scaffolding</a> •
 <a href="#scripts-in-package-json">Scripts in `package.json`</a>
 
</p>

<h2 id="about">About</h2>

This boilerplate is a basic configuration to start a modern front-end project with the following technologies:

- **esbuild**: Ultra-fast packager for compiling TypeScript and SCSS.
- **TypeScript**: JavaScript superset that adds static typing.
- **SCSS**: CSS preprocessor that allows you to use variables, nesting and mixins.
- **Jest**: JavaScript testing framework for testing units and features.
- **live-server**: Development server with automatic reloading to make it easy to see changes in real time.

<h2 id="prerequisites">Prerequisites</h2>

- [NodeJS](https://github.com/)
- [Jest](https://jestjs.io/)
- [Esbuild](https://esbuild.github.io/)


<h2 id="main-features">Main Features:</h2>

- **Fast compilation**: Uses esbuild to compile TypeScript and SCSS efficiently.
- **Testing with Jest**: Configuration to easily write and run unit tests.
- **Development Server**: live-server to monitor project changes and automatically reload the browser.

<h2 id="starting">Starting</h2>

How to start your project

```bash
cd project-name
npm i
```

<h2 id="scaffolding">Scaffolding:</h2>

```
/assets
/src
  index.d.ts
  index.html
  index.ts
  styles.scss
.gitignore 
esbuild_watch.config.js
esbuild.config.js
jest.config.js
LICENSE.txt
package.json
README.md
tsconfig.json
```
<h2 id="scripts-in-package-json">Scripts in `package.json`:</h2>

- `build`: Compiles TypeScript and SCSS files.
- `start`: Starts the development server and monitors changes.
- `test`: Run the tests with Jest.
- `test:watch`: Run tests with Jest and monitor changes.