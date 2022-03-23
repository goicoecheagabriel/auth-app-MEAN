## Extractos de código

### Con el siguiente codigo podemos acceder al objeto global y enviarlo dentro de un evento de Ecwid.


```
var getGlobal = function () {
      if (typeof self !== 'undefined') { return self; }
      if (typeof window !== 'undefined') { return window; }
      throw new Error('unable to locate global object');
    };
var globalse = getGlobal();

var callback = function(cart:any){
    window.localStorage.setItem('carrito-service', JSON.stringify( cart ));
    // globalse?.carritoService?.actualizar();

  }
  callback.bind(globalse)

  Ecwid.OnCartChanged.add(callback);
```

## Consulta para obtener los logs de un usuario por pagina visitada
```
MATCH p=(s)-[i:INGRESO_A]->(f)-[r:CON_ESTE]->(t) where s.`_id`='TJtE0fvw' RETURN s,i,f,r,t order by ID(t)
```

## INSTRUCTIVO PARA CARGAR LOS NODOS
### NAVEGACION POR VISITANTES
1. Para agregar nodos debemos crear un objeto con el siguiente formato.
  ```
  // create an array with nodes
const nodes = new DataSet<any>(
  [
    { id: 1, label: "Verga", data:{a:"Hola"} },
    { id: 2, label: "Node 2" },
    { id: 3, label: "Node 3" },
    { id: 4, label: "Node 4" },
    { id: 5, label: "Coche" },
    { id: 6, label: "Katxa" },
    { id: 7, label: "Hijo" },
  ]
);
  ```

  2. Para agregar edges (o líneas de coneccion) debemos crear el siguiente objeto
  ```
    // create an array with edges
const edges = new DataSet<any>( 
  [
    { from: 1, to: 6 },
    { from: 2, to: 6 },
    { from: 3, to: 6 },
    { from: 4, to: 6 },
    { from: 5, to: 6 },
    { from: 1, to: 7 },
  ]
);
  ```

3. Agregamos uan propiedad `networkInstance: Network`

4. Una vez creados `nodes`, `edges` y `this.networkInstance` debemos agregarlos a un objeto que luego se lo pasaremos al constructor `new Network`. Eso lo hacemos de la siguiente manera.
```
const data = { nodes, edges };

this.networInstance = new Network( this.app.nativeElement, data, options );

// this.app.nativeElement se explica en el punto 5
// options se explica en el punto 6
```

5. Cuando se refiere a `this.app.nativeElement` se refiere al elemento `html` que va a contener el `SVG` que se encargará de mostrar the network graphs

Template HTML
```
//creamos una referencia #app
<p-tabPanel header="Grafos" [headerStyle]='{"font-size":"10px"}'>
  <div #app id="app" style="height: 500px;">Hola</div>
</p-tabPanel>
```
En el TS
```
// Utilizamos @ViewChild para referenciar la etiqueta html con una variable
...

@ViewChild('app', { static: false }) app!:ElementRef;

...
// Y luego se lo pasamos como parametro en la creacion de la instancia de networInstance
this.networkInstance = new Network(this.app.nativeElement, data, options);

...
```

6. Las options son un objeto que describirán las propiedades del objeto que se muestre en el `SVG`

Creacion del objeto `options` y luego lo pasamos al `instanceNetwork`
```
// Creamos el objeto

...
var options = {
      height: '100%',
      width: '100%',
      nodes: {
        shape: 'hexagon',
        font: {
          color: 'grey',
        },
        mass: 1.5,
        color: 'orangered'
      },
      edges: {
        smooth: false,
        arrows: {
          to: {
            enabled: true,
            type: 'vee',
          },
        },
      }
    }
...
// Y luego se lo pasamos como parametro en la creacion de la instancia de networInstance
this.networkInstance = new Network(this.app.nativeElement, data, options);

```

7. Gestión de `events` ( `click`, `dblclick`, etc )
```
// utilizamos la funcion on() para agregar eventos al listener del networkInstance

this.networkInstance.on( 'click', ( e ) => {
  const listaDeNodos = nodes.getDataSet().get();
  const listaDeEdges = edges.getDataSet().get();

// Imprimimos los arreglos de nodos y edges
  console.log(listaDeNodos, listaDeEdges);

// Si se hace click en un nodo, lo detectamos y lo enviamos a consola.
  if ( typeof e.nodes[0] !== 'undefine' ){
    let nodoClickeado = e.nodes[0];

    console.log( `El nodo clickeado fue ${ nodoClickeado }` );
  }
} )
```
8. Personalizar formato de un nodo en particular

### Para personalizar cada node o edge, basta con pasar en el objeto de creación de cada elemento, las propiedades correspondientes. En el siguiente ejemplo, pasamos una lista de nodos y personalizamos solo uno de todo el grupo.
```
const nodes = new DataSet<any>([
  {"id":0,"assistId":0,"label":"equipo","image":"/assets/images/logos/now.png","shape":"image","pid":0,"hostType":"1","hostStatus":"1","size":30,"isOurDraw":"false","x":"-674","y":"-716","hidden":false, "mass":30},
  { id: 1, label: "Moto", data:{a:"Hola"} },
  { id: 2, label: "Node 2" },
  { id: 3, label: "Node 3" },
  { id: 4, label: "Node 4" },
  { id: 5, label: "Coche" },
  { id: 6, label: "Katxa", mass:30 },
  { id: 7, label: "Hijo" },
]);
```






