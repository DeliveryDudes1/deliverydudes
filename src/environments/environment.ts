// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebase: {
    //config ================ APPLY YOUR OWN KEY FOR TESTING   +++++++++++++++++
    apiKey: "AIzaSyD52rAnPS0VQmzslgKSx0QuUt-U0p2i87Y",
    authDomain: "deliverydudes-1542040897875.firebaseapp.com",
    databaseURL: "https://deliverydudes-1542040897875.firebaseio.com",
    projectId: "deliverydudes-1542040897875",
    storageBucket: "deliverydudes-1542040897875.appspot.com",
    messagingSenderId: "1028473677547"
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
