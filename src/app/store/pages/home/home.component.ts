import { Component, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcwidService } from '../../services/ecwid.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public ecwidService: EcwidService,
              private _renderer2:Renderer2,
              private route: ActivatedRoute) {

    // this.ecwidService.renderer = this._renderer2;
    // this.ecwidService.cargarStore();
  }

  ngOnInit(): void {
    // console.log('STATUS LOAD STORE:', this.ecwidService.storeLoad )

    this.route.paramMap.subscribe( ( param ) => {
      console.log("PARAMS DESDE HOME", param);
    } )
  }

}
