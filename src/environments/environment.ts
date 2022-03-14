// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  dominioBase: 'http://192.168.0.22:4002',
  // baseUrl: 'https://my.nowsneakers.com/api',
  baseUrl: 'http://192.168.0.22:4000/api',
  baseMetric: 'http://192.168.0.22:4000/metric',
  apiEcwid:'https://app.ecwid.com/api/v3/54091005',
  apiKeyEcwid:'public_413dGm5kvXjvWKwQv5FP7xmnMZ4q3i7U',
  storeId: 54091005,
  "x-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTlmNjU4YWU1YTYxYjI1ZmE0NDBmNjIiLCJuYW1lIjoiVGVzdDEiLCJpYXQiOjE2NDMyNzk4MTYsImV4cCI6MTY0MzM2NjIxNn0.oOvZWdzBcQ-8VluNTrvAe8d3SXTcCeTDpDOtUDH1BwY',
  neovis: {
    server_url: 'bolt://85.208.21.25:7687',
    server_user: 'neo4j',
    server_password: 'Cybercafe01'
  }
};
// storeId: 35523535
// apiKeyEcwid:'public_KcQbsBtfApSjvEfvxxfbW1nRw2NEZ9Xw',
// apiKeyEcwid:'secret_EzENdMPknzXBfUB2UG7CErbJzp2DpyRZ',

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
