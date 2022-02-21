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

