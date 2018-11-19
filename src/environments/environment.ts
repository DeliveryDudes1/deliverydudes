// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebase: {
    //config ================ APPLY YOUR OWN KEY FOR TESTING   +++++++++++++++++
    apiKey: "AIzaSyDpF3WrTPNyBm-pG5kyfG8VMXggKy2ByLI",
    authDomain: "deliverydudesdb.firebaseapp.com",
    databaseURL: "https://deliverydudesdb.firebaseio.com",
    projectId: "deliverydudesdb",
    storageBucket: "deliverydudesdb.appspot.com",
    messagingSenderId: "545881310352"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
