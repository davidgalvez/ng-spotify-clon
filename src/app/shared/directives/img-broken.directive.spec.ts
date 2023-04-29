import { Component, ElementRef } from '@angular/core';
import { ImgBrokenDirective } from './img-broken.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template:'<img class="testing-directive" appImagBroken [src]="srcMock" > '
})

class TestComponent{
  public srcMock:any = null
}

describe('ImgBrokenDirective', () => {

  let component: TestComponent
  let fixture: ComponentFixture<TestComponent>


  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[
        TestComponent,
        ImgBrokenDirective
      ]
    })

    fixture=TestBed.createComponent(TestComponent)
    component = fixture.componentInstance
    fixture.detectChanges()

  })
  it('should create an instance', () => {
    const mockElement = new ElementRef('')
    const directive = new ImgBrokenDirective(mockElement);
    expect(directive).toBeTruthy();
  });

  it('should instace successfully',()=>{
    expect(component).toBeTruthy()

  });

  /*it('Directive should replace image and set a default picture',(done: DoneFn)=>{

    //Arrange
    const initialImg= fixture.debugElement.query(By.css(".testing-directive")).nativeElement
    const initialImgSrc = initialImg.src

    component.srcMock=undefined

    setTimeout(()=>{
      const currentImg= fixture.debugElement.query(By.css(".testing-directive")).nativeElement
      console.log("curImg------------->",currentImg)
      console.log("curImgSrc------------->",currentImg.src)
      const currentImgSrc = currentImg.src

      expect(currentImgSrc).toEqual('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAkACQDASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAcIAQMEBgn/xAAuEAABAwMCAwcDBQAAAAAAAAABAgMEAAURBiEHEkEIEyIxUWFxMoGRFEJSobH/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAQIDBAUG/8QAIBEAAgEEAQUAAAAAAAAAAAAAAAECAwQFESESMUFRwf/aAAwDAQACEQMRAD8A+/la5kxq3xHH3nG2WWUlbi1qCUoSNySTsAK03i6t2W3uSHjhDdQPxd47yLrb5lpZ7v8ATzCG3DjxNgEE4PvgD4z5Vt2lnUry1HsETvbL/BvaOaHNiS0+rLyXB/RrrqmenrtKt14jzmVDvIK0vJ2GyknI/wAq41vnN3OCzIZPMzIbS6g+qVDIrNkMe7ZrnaZLWjdSlK5xBz3eHHuFskMzEoXFcbKXQo4HLjffp89Kp7rmMzE1RKYhuOPw2lqEdxY8S28+En36e+PIeVWt4kQplz0dMiwspekJ7sqH7Un6vyNvvUUcPuAydSzbsm7pcbS02lMZ1JwpDhJPMB7ADY7HNdzE3EKEZVJvj19LRIjgvpgZjuJ+sg5A9ehqzHZ91Gm+8N4rJXzP21SorozuMHKftykfioqvnZs1HbbyVxordybSDyusvIb5huN0rIIPsM/JqYeDOh1aF0SyxIb5J0omRKGQeVZ8k5H8UgDY4yCetZ8tcUKtFdEk3vwJHrKUpXnCorCUhOcADO5x1pSgM0pSgFKUoD//2Q==')
      done()
    },3000)



  })*/


});
