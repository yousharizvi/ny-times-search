# New York Times
This projected is intended for evaluation purpose only

## Installation
- Have node.js installed as prerequisite or use `nvm` for the same and use lts [NVM Github](https://github.com/nvm-sh/nvm)
- Install dependencies by running `npm install`

## Credentials
1. Register on [NYTimes Developer Portal](https://developer.nytimes.com/)
2. Add an app and enable article search api for that app
3. Generate API Key
4. Replace the api key in the [environment.ts](https://github.com/yousharizvi/ny-times-search/blob/master/src/environments/environment.ts) against `apiKey` field. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.