// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

   firebaseConfig : {
    apiKey: "AIzaSyBg5mnSp30poZ4tIWp023-2YvDSW5KfRlk",
    authDomain: "tm-recipes.firebaseapp.com",
    databaseURL: "https://tm-recipes.firebaseio.com",
    projectId: "tm-recipes",
    storageBucket: "tm-recipes.appspot.com",
    messagingSenderId: "644639390601"
  }
};
