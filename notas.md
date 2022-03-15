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
