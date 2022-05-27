import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef) { 
    console.log('Class directive used!')
    console.log(this.element)
    console.log(this.element.nativeElement)

    // this.element.nativeElement.style.backgroundColor = 'black';
    this.element.nativeElement.style.border = '2px solid black';
  }

}
