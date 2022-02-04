import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropsGeneralService } from 'src/app/shared/props-general.service';
import { EcwidService } from '../../services/ecwid.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('separador') separador!: ElementRef;

  constructor(public ecwidService: EcwidService,
              private _renderer2:Renderer2,
              private route: ActivatedRoute,
              private _propsGeneralService: PropsGeneralService) {

    // this.ecwidService.renderer = this._renderer2;
    // this.ecwidService.cargarStore();
  }

  ngOnInit(): void {
    // console.log('STATUS LOAD STORE:', this.ecwidService.storeLoad )

    this.route.paramMap.subscribe( ( param ) => {
      console.log("PARAMS DESDE HOME", param);
    } )

  }

  ngAfterViewInit(): void {
    let headerHight: number = this._propsGeneralService.altoHeader;
    let mensajeHight: number = this._propsGeneralService.altoMensajeHeader;

    this.separador.nativeElement.style.height = (headerHight + mensajeHight + 20) + 'px';
    console.log(this.separador.nativeElement);

  }

}
