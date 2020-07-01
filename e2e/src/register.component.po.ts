import { browser, by, element, promise } from 'protractor';

export class RegisterComponent {
  navigateToHome(): promise.Promise<any> {
    return browser.get('/register');
  }

  getFirstNameTextbox() {
    return element(by.name('firstName'));
  }

  getLastNameTextbox() {
    return element(by.name('lastName'));
  }

  getEmailTextbox() {
    return element(by.name('email'));
  }

  getPasswordTextbox() {
    return element(by.name('password'));
  }

  getForm() {
    return element(by.tagName('form'));
  }

  getSubmitButton() {
    return element(by.tagName('button'));
  }

  getFirstNameErrors(): promise.Promise<string> {
    return element(by.id('firstnameError')).getText();
  }

  getLastNameErrors(): promise.Promise<string> {
    return element(by.id('lastNameError')).getText();
  }

  getEmailErrors(): promise.Promise<string> {
    return element(by.id('emailError')).getText();
  }

  getPasswordErrors(): promise.Promise<string> {
    return element(by.id('passwordError')).getText();
  }
}
