import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { Menu } from '../../interfaces/menu.interface';
import menuPrincipal from '../../utilities/menu.utility.json';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit, OnChanges {

  menu: Menu = menuPrincipal;


  constructor( ) {
    console.log(this.menu)
    // menuPrincipal.secciones[0].titulo="Mi titulo"
  }

  ngOnInit(): void {
    console.warn(":::ngOnInit:::nav.component")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.warn(":::ngOnChanges:::nav.component")
  }

}


 // menu: Menu= {
  //   secciones: [
  //     {
  //       titulo: "Top categorías",
  //       icono: "fas fa-crown",
  //       tipo: "simple",
  //       items: [
  //         {
  //           titulo: "Nike",
  //           ruta: "store#!/Nike/c/92775401"
  //         },
  //         {
  //           titulo: "Jordan",
  //           ruta: "/store#!/Jordan/c/92775404"
  //         },
  //         {
  //           titulo: "Adidas",
  //           ruta: "/store#!/Adidas/c/92775381"
  //         },
  //         {
  //           titulo: "Converse",
  //           ruta: "/store#!/Converse/c/92775435"
  //         }
  //       ]
  //     },
  //     {
  //       titulo: "Sneakers",
  //       tipo: 'bi-nivel',
  //       items:[
  //         {
  //           titulo: "Nike",
  //           ruta: "/store#!/Nike/c/92775401",
  //           items: [
  //             {
  //               titulo: "Air Fear of God",
  //               ruta: "/store#!/Air-Fear-Of-God-1/c/92775402"
  //             },
  //             {
  //               titulo: "Air Force 1",
  //               ruta: "/store#!/Air-Force-1/c/92775403"
  //             },
  //             {
  //               titulo: "Air Max 97",
  //               ruta: "/store#!/Air-Max-97/c/92775481"
  //             },
  //             {
  //               titulo: "Air Max 270",
  //               ruta: "/store#!/Air-Max-270/c/92775477"
  //             },
  //             {
  //               titulo: "Air Max 720",
  //               ruta: "/store#!/Air-Max-720/c/92775478"
  //             },
  //             {
  //               titulo: "Air Max Plus TN",
  //               ruta: "/store#!/Air-Max-Plus-TN/c/92775484"
  //             },
  //             {
  //               titulo: "Blazer",
  //               ruta: "/store#!/Blazer-Mid/c/92775419"
  //             },
  //             {
  //               titulo: "Dunklow",
  //               ruta: "/store#!/Dunklow/c/92775447"
  //             },
  //             {
  //               titulo: "LDWaffle",
  //               ruta: "/store#!/LDWaffle-x-Sacai/c/92775499"
  //             },
  //             {
  //               titulo: "Shox TL",
  //               ruta: "/store#!/Shot-TL/c/92775506"
  //             },
  //             {
  //               titulo: "React Element 87",
  //               ruta: "/store#!/React-Element-87/c/92775504"
  //             },
  //             {
  //               titulo: "Uptempo",
  //               ruta: "/store#!/~/search/keyword=uptempo"
  //             },
  //             {
  //               titulo: "Vapormax",
  //               ruta: "/store#!/~/search/keyword=vapormax"
  //             },
  //             {
  //               titulo: "Vapormax Plus",
  //               ruta: "/store#!/~/search/keyword=vapormax%20plus"
  //             }
  //           ]
  //         },
  //         {
  //           titulo: "Jordan",
  //           ruta: "/store#!/Jordan/c/92775404",
  //           items: [
  //             {
  //               titulo: "Jordan 1",
  //               ruta: "/store#!/Air-Jordan-1/c/92775407"
  //             },
  //             {
  //               titulo: "Jordan 3",
  //               ruta: "/store#!/Air-Jordan-3/c/92775408"
  //             },
  //             {
  //               titulo: "Jordan 4",
  //               ruta: "/store#!/Air-Jordan-4/c/92775409"
  //             },
  //             {
  //               titulo: "Jordan 5",
  //               ruta: "/store#!/Air-Jordan-5/c/92775410"
  //             },
  //             {
  //               titulo: "Jordan 6",
  //               ruta: "/store#!/Air-Jordan-6/c/92775411"
  //             },
  //             {
  //               titulo: "Jordan 11",
  //               ruta: "/store#!/Air-Jordan-11/c/92775405"
  //             },
  //             {
  //               titulo: "Jordan 12",
  //               ruta: "/store#!/Air-Jordan-12/c/92775406"
  //             }
  //           ]
  //         },
  //         {
  //           titulo: "Adidas",
  //           ruta: "store#!/Adidas/c/92775381",
  //           items: [
  //             {
  //               titulo: "Yeezy 350 v2",
  //               ruta: "/store#!/Yeezy-350/c/92775389"
  //             },
  //             {
  //               titulo: "Yeezy 380",
  //               ruta: "/store#!/Yeezy-380/c/92775394"
  //             },
  //             {
  //               titulo: "Yeezy 500",
  //               ruta: "/store#!/Yeezy-500/c/92775395"
  //             },
  //             {
  //               titulo: "Yeezy 700",
  //               ruta: "/store#!/Yeezy-700/c/92775397"
  //             },
  //             {
  //               titulo: "Yeezy 750",
  //               ruta: "/store#!/Yeezy-750/c/92775398"
  //             },
  //             {
  //               titulo: "Yeezy Bascketball",
  //               ruta: "/store#!/Yeezy-Basketball/c/92775399"
  //             },
  //             {
  //               titulo: "Human Race",
  //               ruta: "/store#!/Human-Race/c/92775392#!/Human-Race/c/92775392"
  //             }
  //           ]
  //         },
  //         {
  //           titulo: "Converse",
  //           ruta: "/store#!/Converse/c/92775435"
  //         },
  //         {
  //           titulo: "Fila",
  //           ruta: "/store#!/~/search/keyword=Fila",
  //           items: [
  //             {
  //               titulo: "Disruptor II",
  //               ruta: "/store#!/Discruptor/c/92775450"
  //             }
  //           ]
  //         },
  //         {
  //           titulo: "Alexander McQueen",
  //           ruta: "/store#!/~/search/keyword=Alexander McQueen"
  //         },
  //         {
  //           titulo: "Balenciaga",
  //           ruta: "/store#!/~/search/keyword=balenciaga",
  //           items: [
  //             {
  //               titulo: "TRIPLE-S",
  //               ruta: "/store#!/Triple-S/c/92775418"
  //             },
  //             {
  //               titulo: "Track",
  //               ruta: "/store#!/Track/c/92775417"
  //             },
  //             {
  //               titulo: "Speed Runner",
  //               ruta: "/store#!/Speed-Run/c/92775416"
  //             }
  //           ]
  //         },
  //         {
  //           titulo: "Dior",
  //           ruta: "/store#!/~/search/keyword=dior",
  //           items: [
  //             {
  //               titulo: "B22",
  //               ruta: "/store#!/B22/c/92775441"
  //             },
  //             {
  //               titulo: "B23",
  //               ruta: "/store#!/B22/c/92775442"
  //             }
  //           ]
  //         },
  //         {
  //           titulo: "Valentino",
  //           ruta: "/store#!/~/search/keyword=valentino",
  //           items: [
  //             {
  //               titulo: "Open",
  //               ruta: "/store#!/Open/c/92775520"
  //             },
  //             {
  //               titulo: "Gumboy",
  //               ruta: "/store#!/Gumboy Calfskin/c/92775519"
  //             },
  //             {
  //               titulo: "Rockrunner",
  //               ruta: "/store#!/Rockrunner/c/92775521"
  //             },
  //           ]
  //         },
  //         {
  //           titulo: "Versace",
  //           ruta:"/store#!/~/search/keyword=versace",
  //           items: [
  //             {
  //               titulo: "Chain",
  //               ruta: "/store#!/Chain Reaction/c/92775526"
  //             },
  //             {
  //               titulo: "Squalo",
  //               ruta: "/store#!/Squalo/c/92775527"
  //             }
  //           ]
  //         },
  //         {
  //           titulo: "Givenchy",
  //           ruta: "/store#!/~/search/keyword=givenchy"
  //         },
  //         {
  //           titulo: "Louboutin",
  //           ruta: "/store#!/~/search/keyword=louboutin"
  //         }
  //       ]
  //     },
  //     {
  //       titulo: "Más Pedidos",
  //       tipo: "grafico",
  //       items: [
  //         {
  //           imagen: "../../../../assets/images/logos/jordan.svg",
  //           ruta: "/store#!/Air-Jordan-1/c/92775407"
  //         },
  //         {
  //           imagen: "../../../../assets/images/logos/nike.svg",
  //           ruta: "/store#!/Air-Force-1/c/92775403"
  //         },
  //         {
  //           imagen: "http://192.168.0.25:4001/assets/images/components/Jordan_Travis_Scott_trans.png",
  //           ruta: "/store#!/Air-Jordan-1-x-Travis-Scott/p/320319524"
  //         },
  //         {
  //           imagen: "http://192.168.0.25:4001/assets/images/components/Jordan_UNC_trans.png",
  //           ruta: "/store#!/Air-Jordan-1-Retro-High-UNC-Patent/p/320319503"
  //         }
  //       ]
  //     },
  //     {
  //       titulo: "Talles",
  //       tipo: "simple",
  //       items: [
  //         {
  //           titulo: "Tabla de talles",
  //           ruta: "https://www.nowsneakers.com/size.html"
  //         }
  //       ]
  //     }
  //   ]
  // }
