
export interface Visitantes {
  ok    : boolean;
  data? : Visitante[];
  msg?  : string;
}

export interface Visitante {
  _id         : string;
  create_at   : number;
  order       : number;
}

