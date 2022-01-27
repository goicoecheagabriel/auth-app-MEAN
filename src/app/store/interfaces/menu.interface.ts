export interface Menu {
  "secciones": NavLevel1[];
}


export interface NavItem {
  "titulo"?  : string;
  "imagen"? : string;
  "ruta"   : string;
  "items"?  : NavItem[];
}


export interface NavLevel1 {
  "titulo"  : string;
  "ruta"?   : string;
  "icono"?  : string;
  // "tipo"    : 'simple' | 'bi-nivel' | 'grafico';
  "tipo"    : string;
  "items"?   : NavItem[];
}

export enum tipo{
  SIMPLE = 'simple',
  BINIVEL = "bi-nivel",
  GRAFICO = "grafico",
  BASICO = "basico"
}
