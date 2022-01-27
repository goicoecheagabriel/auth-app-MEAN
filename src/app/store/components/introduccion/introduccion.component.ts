import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';



@Component({
  selector: 'app-introduccion',
  templateUrl: './introduccion.component.html',
  styleUrls: ['./introduccion.component.css'],
  animations: [
    trigger( 'aniPresent', [
      state( 'primero', style( {
        opacity:'1',
        transform: 'translateX(0px)'
        // transform: 'rotateX(45deg);'
      } ) ),
      state( 'segundo', style( {
        opacity:'.8',
        transform: 'translateX(-10px)' ,
        // transform: 'rotateX(10deg);'

      } ) ),
      transition('primero => segundo', animate('500ms ease-in')),
      transition('segundo => primero', animate('500ms ease-in')),
    ] )
  ]
})
export class IntroduccionComponent implements OnInit {
  @ViewChild('cycleSlide') cycleSlide!: ElementRef;

  state: string = 'primero';
  mover: any = undefined;
  constructor() {
    this.mover = setInterval(() => {
      this.state = this.state === 'primero' ? 'segundo' : 'primero';
      // console.log(this.state)
    }, 200);

    setTimeout(() => {
      clearInterval(this.mover);
      this.state = 'primero';
    }, 5000);

  }

  ngOnInit(): void {





  }

  ngAfterViewInit(){
    console.log("Volvemos a cargar la introduccion")
    this.cycleSlide.nativeElement.click();

  }

}
