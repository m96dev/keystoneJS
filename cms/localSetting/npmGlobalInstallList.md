# npm installed modules list

npm module local & global on mac

- local:  /Users/{userid}/m96dev/keystoneJS/cms
- global: /Users/{userid}/.nodebrew/node/v8.1.4/lib

## global

sh
`$ npm list -g --depth=0  > npmGlobalInstallList.md`

```sh
/Users/mono05/.nodebrew/node/v8.1.4/lib
├── asar@0.14.0
├── electron-packager@10.1.0
├── electron-prebuilt@1.4.13
├── eslint@4.12.1
├── forever@0.15.3
├── generator-keystone@0.5.1
├── gulp-cli@1.4.0
├── jshint@2.9.5
├── jslint@0.12.0
├── nodemon@1.14.11
├── npm@5.7.1
├── npm-check-updates@2.14.0
├── pug-cli@1.0.0-alpha6
├── pug-lint@2.5.0
├── standard@10.0.3
├── typescript@2.4.2
└── yo@2.0.1

```

## local

sh
`$ npm list --depth=0  > npmGlobalInstallList.md`

```sh

cms@0.0.0 /Users/mono05/m96dev/keystoneJS/cms
├── async@2.6.0
├── dotenv@5.0.0
├── UNMET PEER DEPENDENCY eslint@3.19.0
├── eslint-config-keystone@3.0.0
├── eslint-config-standard@11.0.0
├── eslint-plugin-import@2.9.0 extraneous
├── eslint-plugin-node@6.0.1 extraneous
├── eslint-plugin-promise@3.6.0
├── eslint-plugin-react@7.6.1
├── eslint-plugin-standard@3.0.1
├── keystone@4.0.0-beta.8
├── keystone-email@1.0.5
├── lodash@4.17.5
├── nodemon@1.17.1
├── pug@2.0.0-rc.4
└── stylus@0.54.5

npm ERR! peer dep missing: eslint@>=4.18.0, required by eslint-config-standard@11.0.0
npm ERR! extraneous: eslint-plugin-import@2.9.0 /Users/mono05/m96dev/keystoneJS/cms/node_modules/eslint-plugin-import
npm ERR! extraneous: eslint-plugin-node@6.0.1 /Users/mono05/m96dev/keystoneJS/cms/node_modules/eslint-plugin-node

```
