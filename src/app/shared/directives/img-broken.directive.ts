import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {

  @Input() customImg: string =''

  @HostListener('error') handleError(): void {
    const elNative=this.elHost.nativeElement
    console.log('La siguiente imagen tiene error: ', this.elHost)
    elNative.src=this.customImg
  }

  constructor(private elHost: ElementRef) {
    //console.log(this.elHost)
  }

}
