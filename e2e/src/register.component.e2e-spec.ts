import { RegisterComponent } from './register.component.po';

describe(' Register component', () => {
  const register = new RegisterComponent();

  beforeEach(() => {
    register.navigateToHome();
  });

  it('Login form should be valid', () => {
    register.getFirstNameTextbox().sendKeys('John');
    register.getLastNameTextbox().sendKeys('Doe');
    register.getEmailTextbox().sendKeys('info@sibeeshpassion.com');
    register.getPasswordTextbox().sendKeys('Test1234');
    // register.getSubmitButton().click();
    let form = register.getForm().getAttribute('class');
    expect(form).toContain('ng-valid');
  });

  it('should show error message when first name is not filled', () => {
    register.getFirstNameTextbox().sendKeys('');
    register.getSubmitButton().click();
    const error = register.getFirstNameErrors();
    expect(error).toContain('First Name is required');
  });

  it('should show error message when last name is not filled', () => {
    register.getLastNameTextbox().sendKeys('');
    register.getSubmitButton().click();
    const error = register.getLastNameErrors();
    expect(error).toContain('Last Name is required');
  });

  it('should show error message when email is not filled and not valid', () => {
    register.getEmailTextbox().sendKeys('');
    register.getSubmitButton().click();
    let error = register.getEmailErrors();
    expect(error).toContain('E-mail is required');

    register.getEmailTextbox().sendKeys('test');
    error = register.getEmailErrors();

    expect(error).toContain('Not a valid email');
  });

  it('should show error message when password is not filled', () => {
    register.getFirstNameTextbox().sendKeys('John');
    register.getLastNameTextbox().sendKeys('Doe');
    register.getPasswordTextbox().sendKeys('');
    register.getSubmitButton().click();
    let error = register.getPasswordErrors();

    expect(error).toContain('Password is required');

    register.getPasswordTextbox().sendKeys('test');
    error = register.getPasswordErrors();
    expect(error).toContain('Password must be at least 6 characters');

    expect(error).toContain(
      'Password must contain at least 1 lowercase letter and 1 uppercase letters'
    );
    expect(error).toContain('Password must be at least 6 characters');
  });
});
