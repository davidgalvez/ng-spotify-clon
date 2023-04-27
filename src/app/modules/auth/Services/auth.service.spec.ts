import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { AuthService } from './auth.service';
import *  as mockDataRaw from '@data/user.json';
import { CookieService } from 'ngx-cookie-service';
import { of } from 'rxjs';

describe('AuthService', () => {
  let service: AuthService;
  let mockUser:any = (mockDataRaw as any).default;
  let mockCookieService: CookieService;
  let httpClientSpy:{post: jasmine.Spy}

  beforeEach(() => {
    mockCookieService = jasmine.createSpyObj('CookieService', ['get','check', 'set', 'delete']);
    mockCookieService.check
    //mockCookeService.returnValue(true);
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [
        { provide: CookieService, useValue: mockCookieService }
      ]
    });
    httpClientSpy = jasmine.createSpyObj('httpClient',['post'])
    service = new AuthService(httpClientSpy as any, mockCookieService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return and object with "data" and "tokenSession"',(done:DoneFn)=>{
    //Arrange
    let user=mockUser.userOk
    let mockResponse={
      data:{},
      tokenSession:"xxxxxxxxxx"
    }
    httpClientSpy.post.and.returnValue(
      of(mockResponse)
    )

    //Act
    service.sendCredentials(user.email,user.password)
    .subscribe(responseApi=>{
      const getProperties = Object.keys(responseApi)
      expect(getProperties).toContain('data')
      expect(getProperties).toContain('tokenSession')
      done()
    })
  });

  it("Should get the sum of 2+3",()=>{
    //Arrange
    let a=2
    let b=3

    //Act
    let c=service.checkSum(a,b)

    //Assert
    expect(c).toEqual(5)
  })



});
