// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  USER_API_URL: "http://localhost:8081/users",
  ADMIN_API_URL: "http://localhost:8081/admin",
  USER_BOOK_API_URL: "http://localhost:8081/books",

  //  user api urls
  REGISTRATION_URL: "/signup",
  ACTIVATE_ACCOUNT_URL: "/verification",
  LOGIN_URL: "/signin",
  ADD_BOOK: "/add",
  GET_ALL_ADMIN_BOOKS: "/get",
  DELETE_BOOK_BY_ADMIN: "/remove",
  ADD_REMOVE_FROM_CART: "/cart?id=",
  ADD_REMOVE_FROM_WATCHLIST: "/watchlist?id=",
  GET_ALL_CART_BOOKS: "/cart",
  PLACE_ORDER: "/checkout",

  // address
  ADD_ADDRESS_USER: "/address/add",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
