export interface ProductsVisitedForUser {
  ok:      boolean;
  msg:     string;
  data?: Data;
}

export interface Data {
  nodes: Node[];
  edges: Edge[];
}

export interface Edge {
  id:    number;
  from:  number;
  to:    number;
  color?: string;
  data:  EdgeData;
}

export interface EdgeData {
  label?: string;
}

export interface Node {
  id:      number;
  label?:  string | number;
  image?:   string;
  shape?:   string;
  mass?:   number;
  data?:    NodeData;
  titulo?: string;
  size?:   number;
}

export interface NodeData {
  titulo?:          string;
  order?:           number;
  create_at?:        number | null;
  label?:           string | number;
  count?:           number;
  pathname?:        string;
  sku?:             string;
  name?:            string;
  price?:           string;
  url?:             string;
  description?:     string;
  media?:           string;
  categoryIds?:     string;
  relatedProducts?: string;
}
