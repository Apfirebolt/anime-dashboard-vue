# Anime Dashboard - Vue, Vite + Tailwind

**Anime Dashboard is an application to get anime related info using the unofficial [MyAnimeList](https://myanimelist.net/) API. Please visit the Jikan unofficial API link [Jikan](https://jikan.moe/).**

<p align="center"><a href="https://vuejs.org" target="_blank" rel="noopener noreferrer"><img width="100" src="https://raw.githubusercontent.com/Apfirebolt/anime-dashboard-vue/main/src/assets/logo.png" alt="Vue logo"></a></p>

## Technologies Used

A front-end app created in Vue using Tailwind css and Headless UI

![Vite](https://img.shields.io/badge/-Vite-%23F766?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS-%2338B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vue JS](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)
![Cypress](https://img.shields.io/badge/-Cypress-%23green?style=for-the-badge&logo=cypress&logoColor=white)


## Getting started

The project uses Vite build tool for lighting-fast modern single-page application development. It is expected to have Node installed on your system. Then, run the conventional npm commands to see the project in action.

```
npm install
npm run build
npm run dev
```

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

## Ecosystem

| Package        | Purpose                |
| -------------- | ---------------------- |
| Vue-router     | For routing in Vue     |
| Pinia          | For Vue store          |
| Tailwind CSS   | For CSS Styles         |
| Headless icons | For icons to be used   |
| Express        | Serving Vue build      |
| Vee-validate   | For validations        |
| Headless UI    | For dynamic components |

## Project Screenshots

Only contains home page with features like searching for an anime and gets the data in paginated form.

![Screenshot](./screenshots/1.png)

Pagination is available with the API response, 25 items are fetched at max in one go.

![Screenshot](./screenshots/2.png)

## Automated Tests with Cypress

Configure the cypress config file as per Vue and Vite. After configuration is completed a cypress folder would be generated inside of which you can have your component as well as integration tests

```
npx cypress open
```

Here's the sample of config file generated after you run cypress for the first time

```
import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
```

For adding vue specific tests, do install cypress/vue package to virtually mount the components and test them.

## ESLint Installation

1. Install ESLint and Eslint-Plugin-Vue

```
npm install eslint --save-dev
npm install --save-dev eslint eslint-plugin-vue
```

2. Manually create the eslint config file 'eslint.config.js'

```
import pluginVue from 'eslint-plugin-vue'
export default [
    ...pluginVue.configs['flat/recommended'],
    // ...pluginVue.configs['flat/vue2-recommended'], // Use this if you are using Vue.js 2.x.
    {
        rules: {
            // override/add rules settings here, such as:
            // 'vue/no-unused-vars': 'error'
            'no-console': 'error' // Enable console statements.
        }
    }
]
```
3. Add Linting and fixing scripts in the package.json file 

```
"lint": "eslint .",
"lint:fix": "eslint --fix .",
```

3. At this point of time, linting should have been added to your project. Add Husky and pre-commit hooks

```
npx husky-init 
```

Npx is a tool included with npm that allows you to execute packages from the npm registry without installing them globally.
You can achieve the same functionality by installing Husky explicitly with npm install husky --save-dev followed by npx husky install to initialize the hooks. However, npx husky-init is a convenient one-step approach.

After running npx husky-init, you'll need to configure the pre-commit hook behavior further. You can define which scripts or commands to run before commit using your project's configuration files (like .eslintrc.js for ESLint).

## Checking Updates

Check if there are updates available for NPM packages used in this project.

---

```
npx npm-check-updates

npx npm-check-updates -u

npm i
```

## Docker Deployment

1. Build the image from the given Dockerfile, give it a intuitive name 'anime-dashboard'.

```
docker build -t anime-dashboard . 
```

2. Run the Docker container on port 4200 which is the default port used by Angular Applications.

```
docker run -p 4200:80 --name dashboard anime-dashboard
```

## Issues

No issues as of now, issues would be added here to be addressed later.

## Changelog

- April 2024 : Initial Release with basic features from anime search page.

## Stay In Touch

- [Twitter](https://twitter.com/vuejs)
- [Blog](https://medium.com/the-vue-point)
- [Job Board](https://vuejobs.com/?ref=vuejs)

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2024-present, Amit Prafulla (Apfirebolt)