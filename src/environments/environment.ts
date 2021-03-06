// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseUrl: 'https://api.nytimes.com',
  apiKey: '<ENTER_YOUR_API_KEY>',
  apiSearchPath: '/svc/search/v2/articlesearch.json',
  imagesBaseUrl: 'https://www.nytimes.com',
  paginationLimit: 100
};
