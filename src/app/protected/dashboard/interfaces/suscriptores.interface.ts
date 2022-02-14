export interface Suscriptors {
  ok:   boolean;
  data?: Suscriptor[];
  msg?:string;
}

export interface Suscriptor {
  _id:              string;
  name:             string;
  email:            string;
  validado:         boolean;
  aceptaPublicidad: boolean;
  __v:              number;
  origen?:          string;
}
