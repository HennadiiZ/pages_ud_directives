import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  // @Input() backgroundColor!: string;

  constructor(private element: ElementRef) { 
    console.log('Class directive used!')
    console.log(this.element)
    console.log(this.element.nativeElement)
    // this.element.nativeElement.style.border = '2px solid black';

    // NEVER DO IT
    // setTimeout(()=>{
    //   this.element.nativeElement.style.backgroundColor = this.backgroundColor;
    // }, 5);
    
  }

  @Input() set backgroundColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

}

//================================================================
// const directive = new ClassDirective();
// directive.backgroundColor = 'red';

//================================================================
// class Car {
  //  set color(newColor: string){
  //    console.log(newColor); // blue
  //  }
//}
// const car = new Car();
//car.color = 'blue';

//================================================================
// Communicate from parent to child component ...
// Parent component template:
// <app-card [title]=" 'SnowyMountains' " ></app-card>


// Child component class
// class ChildComponent {
      // @Input() title: string;
// }