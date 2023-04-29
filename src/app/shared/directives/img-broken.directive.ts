import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {

  @Input() customImg: string|boolean =false

  @HostListener('error') handleError(): void {
    const elNative=this.elHost.nativeElement
    console.log('La siguiente imagen tiene error: ', this.elHost)
    if(this.customImg){
      elNative.src=this.customImg
    }else{
      elNative.src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wAARCAAkACQDASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAcIAQMEBgn/xAAuEAABAwMCAwcDBQAAAAAAAAABAgMEAAURBiEHEkEIEyIxUWFxMoGRFEJSobH/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAQIDBAUG/8QAIBEAAgEEAQUAAAAAAAAAAAAAAAECAwQFESESMUFRwf/aAAwDAQACEQMRAD8A+/la5kxq3xHH3nG2WWUlbi1qCUoSNySTsAK03i6t2W3uSHjhDdQPxd47yLrb5lpZ7v8ATzCG3DjxNgEE4PvgD4z5Vt2lnUry1HsETvbL/BvaOaHNiS0+rLyXB/RrrqmenrtKt14jzmVDvIK0vJ2GyknI/wAq41vnN3OCzIZPMzIbS6g+qVDIrNkMe7ZrnaZLWjdSlK5xBz3eHHuFskMzEoXFcbKXQo4HLjffp89Kp7rmMzE1RKYhuOPw2lqEdxY8S28+En36e+PIeVWt4kQplz0dMiwspekJ7sqH7Un6vyNvvUUcPuAydSzbsm7pcbS02lMZ1JwpDhJPMB7ADY7HNdzE3EKEZVJvj19LRIjgvpgZjuJ+sg5A9ehqzHZ91Gm+8N4rJXzP21SorozuMHKftykfioqvnZs1HbbyVxordybSDyusvIb5huN0rIIPsM/JqYeDOh1aF0SyxIb5J0omRKGQeVZ8k5H8UgDY4yCetZ8tcUKtFdEk3vwJHrKUpXnCorCUhOcADO5x1pSgM0pSgFKUoD//2Q=='      
    }
    
  }

  constructor(private elHost: ElementRef) {
    //console.log(this.elHost)
  }

}
