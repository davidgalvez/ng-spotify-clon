import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { LoginPageComponent } from './login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPageComponent ],
      imports:[HttpClientTestingModule, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return invalid form', () => {
    //Arrange
    const mockCredentials={
      email: 'email-erroneo.com',
      password:'444444444555555555555444444444'
    }

    const emailForm:any=component.formLogin.get('email')
    const passwordForm:any=component.formLogin.get('password')

    //Act
    emailForm.setValue(mockCredentials.email)
    emailForm.setValue(mockCredentials.password)

    //Assert
    expect(component.formLogin.invalid).toEqual(true)


  });

  it('Button should show text "Iniciar sesión"',()=>{
    //Arrange
    const elementRef = fixture.debugElement.query(By.css('.form-action button'))    

    //Act
    const getInnerText =elementRef.nativeElement.innerText

    //Assert
    expect(getInnerText).toEqual('Iniciar sesión')
  })
});
