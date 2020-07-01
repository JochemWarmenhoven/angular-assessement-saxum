import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule,
      ],
      declarations: [RegisterComponent],
      providers: [{ provide: FormBuilder, useValue: formBuilder }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test form validity', () => {
    const form = component.f;
    expect(form.valid).toBeFalsy();
  });

  it('should test name input validity', () => {
    const firstNameInput = component.f.firstName;
    const lastNameInput = component.f.lastName;

    expect(firstNameInput.valid).toBeFalsy();
    expect(lastNameInput.valid).toBeFalsy();

    firstNameInput.setValue('John');
    lastNameInput.setValue('Doe');

    expect(firstNameInput.valid).toBeTruthy();
    expect(lastNameInput.valid).toBeTruthy();
  });

  it('should test email input validity', () => {
    const emailInput = component.f.email;

    expect(emailInput.valid).toBeFalsy();

    // should be false when not a valid email
    emailInput.setValue('test');
    expect(emailInput.valid).toBeFalsy();

    emailInput.setValue('test@email.nl');
    expect(emailInput.valid).toBeTruthy();
  });

  it('should test password input validity', () => {
    const passwordInput = component.f.password;

    expect(passwordInput.valid).toBeFalsy();

    // should be false when less than 8 chars
    passwordInput.setValue('test');
    expect(passwordInput.valid).toBeFalsy();

    // should be false when less than no uppercase and lowercase
    passwordInput.setValue('test1234');
    expect(passwordInput.valid).toBeFalsy();

    passwordInput.setValue('TEst12345');
    expect(passwordInput.valid).toBeTruthy();
  });

  it('should test form validity based on all inputs', () => {
    const form = component.registerForm;
    const { password, email, firstName, lastName } = component.f;

    firstName.setValue('john');
    lastName.setValue('Doe');
    password.setValue('John12345');
    email.setValue('johndoe@test.nl');

    const success = component.onSubmit();
    expect(success).toBeFalsy();

    password.setValue('Test1234');
    expect(form.valid).toBeTruthy();
  });
});
