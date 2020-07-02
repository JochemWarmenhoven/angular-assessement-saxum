# Angular Assessment Saxum

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## Requirements

Build a single page app with a sign-up form.

- The form should allow users to enter first name, last name, email, and password.
- All fields are required.
- Password validation:
  - Should be a minimum of eight characters,
  - Should contain lower and uppercase letters, o Should not contain user’s first or last name.
  - Email should be validated but there are various ways of accomplishing this. So, show us what you consider as a proper email validation.
- The form should send a POST request to https://demo-api.now.sh/users.

## Added libraries

Because Angular provides eveything i didn't need to add any libraries. I did however add Bootstrap as a CDN for easy styling.

## Testing

The application is integration tested and has end-to-end testing.

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Development server

Clone te repo and run `npm install` to install the required packages.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
