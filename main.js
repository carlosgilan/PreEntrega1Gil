//Sistema de simulador de creditos. Segunda Pre Entrega

let montoDelCredito; //variable que guarda el monto del prestamo que ingresa el usuario.

let numeroDeCuotas; //Variable que guarda el numero de cuotas del prestamo.

let montoTotalDelCredito; //Se guarda el monto que termina pagando el usuario por el prestamo.

let montoTotalDeCuotas; //Se guarda el monto total de cada cuota.s

let salida; //Realiza la bandera al While para salir del simulador.

let continuar; //Sirve como bandera para continuar en un segmento del programa.

alert("Bienvenido al simulador de Créditos del Sweden Bank.");

salida = prompt("Ingrese 1 para inciar o 0 para salir: ");
let opcion = prompt(
  "1 - Solicitar un prestamo.\n2 - Credito para auto. \n3 - Seguros\n4 - Contactos"
);

class Menu {
  constructor(opcion1, opcion2, opcion3, opcion4) {
    this.opcion1 = opcion1;
    this.opcion2 = opcion2;
    this.opcion3 = opcion3;
    this.opcion4 = opcion4;
  }
}

const inicio = new Menu("1", "2", "3", "4");
if (opcion === inicio.opcion1) {
  alert("Sera dirigido para realizar el calculo de su prestamo");
}
if (opcion === inicio.opcion2) {
  alert("Sera dirigido para solicitar un credito para auto");
}
if (opcion === inicio.opcion3) {
  alert("Sera dirigido para hacer buscar un tipo de seguro");
}

while (opcion === inicio.opcion4) {
  if (opcion === inicio.opcion4) {
    alert(
      "Nuestros telefonos de contacto son: \n 11-23458965 - 11-44568045 \nwww.swedenbank.com "
    );
  }
  break;
}
if (salida === "0") {
  alert("Saliendo...");
}

//Ciclo While para que el usuario puedan entra a realizar los calculos o pueda salir del simulador.

while (salida != "0" && continuar != "2") {
  if (opcion === inicio.opcion1) {
    montoDelCredito = parseInt(
      prompt("Ingresa el monto del credito que deseas solicitar.")
    );

    numeroDeCuotas = parseInt(
      prompt(
        "Ingresa el numero de cuotas por mes para realizar el pago del credito. Pueden ser: 6, 12, 18 ó 60 cuotas."
      )
    );

    //Funcion que calcula el monto total a pagar por el dinero solicitado

    let calcularMontoTotalDelCredito = (numeroDeCuotas) => {
      if (numeroDeCuotas === 6) {
        montoTotalDelCredito = montoDelCredito * 0.3 + montoDelCredito;
        alert("El total a pagar es: " + montoTotalDelCredito);
      } else if (numeroDeCuotas === 12) {
        montoTotalDelCredito = montoDelCredito * 0.4 + montoDelCredito;
        alert("El total a pagar es: " + montoTotalDelCredito);
      } else if (numeroDeCuotas === 18) {
        montoTotalDelCredito = montoDelCredito * 0.5 + montoDelCredito;
        alert("El total a pagar es: " + montoTotalDelCredito);
      } else if (numeroDeCuotas === 60) {
        montoTotalDelCredito = montoDelCredito * 0.7 + montoDelCredito;
        alert("El total a pagar es: " + montoTotalDelCredito);
      } else {
        alert("la opcion ingresada de ingresado no es valida.");
      }
    };

    calcularMontoTotalDelCredito(numeroDeCuotas);

    continuar = prompt(
      "Ingrese la opcion 1 si desea continuar o la opcion 2 para salir"
    );

    if (continuar === "1") {
      alert(
        "Bien calcularemos en cuanto quedara la cuota por mes de su prestamo..."
      );
      let calcularCuotas = () => {
        montoTotalDeCuotas = montoTotalDelCredito / numeroDeCuotas;
        return montoTotalDeCuotas;
      };
      alert(
        "El monto  total de la cuota a pagar por " +
          numeroDeCuotas +
          " meses es " +
          calcularCuotas()
      );
    }
  }
  if (opcion === inicio.opcion2) {
    numeroDeCuotas = parseInt(
      prompt(
        "Ingresa el numero de cuotas por mes para realizar el pago del credito automotriz. Pueden ser: 6 0 12 cuotas"
      )
    );

    if (numeroDeCuotas === "6") {
      alert("El prestamo otorgado tendra una taza de interes del 20%");
    } else if (numeroDeCuotas === "12") {
      alert("El prestamo otorgado tendra una taza de interes del 40%");
    }

    montoDelCredito = parseInt(
      prompt("Ingresa el monto del credito que deseas solicitar.")
    );

    let calcularMontoTotalDelCredito = (numeroDeCuotas) => {
      if (numeroDeCuotas === 6) {
        montoTotalDelCredito = montoDelCredito * 0.2 + montoDelCredito;
        alert("El total a pagar es: " + montoTotalDelCredito);
      } else if (numeroDeCuotas === 12) {
        montoTotalDelCredito = montoDelCredito * 0.4 + montoDelCredito;
        alert("El total a pagar es: " + montoTotalDelCredito);
      } else {
        alert("la opcion ingresada de ingresado no es valida.");
      }
    };

    calcularMontoTotalDelCredito(numeroDeCuotas);

    class PrestamoAuto {
      constructor(numeroDeCuotas, montoTotalDelCredito) {
        this.numeroDeCuotas = numeroDeCuotas;
        this.montoTotalDelCredito = montoTotalDelCredito;
      }
    }

    const prestamosAuto = [];

    prestamosAuto.push(new PrestamoAuto(numeroDeCuotas, montoTotalDelCredito));

    for (item of prestamosAuto) {
      alert(
        "El numero de cuotas es: " +
          item.numeroDeCuotas +
          " y el Monto total a pagar es: " +
          item.montoTotalDelCredito
      );
    }
  }
  if (opcion === inicio.opcion3) {
    const seguros = [
      { nombre: "Seguro de vida" },
      { nombre: "Seguro de hogar" },
      { nombre: "Seguro para autos" },
    ];

    let bucadorSeguros = prompt(
      "Buscador de seguros: \nIngresa el seguro que te gustaria contratar para saber si esta disponible\n- Seguro de vida\n- Seguro de hogar\n- Seguro contra incendios\n- Seguro para autos"
    );

    const seguro = seguros.find((item) => item.nombre === bucadorSeguros);

    if (seguro) {
      alert(`
        Seguro encontrado: ${seguro.nombre}`);
    } else {
      alert("Seguro no encontrado");
    }
    let respuesta = prompt(
      "Por se el un cliente fiel te tenemos una sorpresa...\nIngresa si, si la quieres..."
    );

    if (respuesta === "Si".toLowerCase() || "Si".toUpperCase()) {
      const seguros2 = [
        "Seguro de vida",
        "Seguro de hogar",
        "Seguro para autos",
      ];
      const seguroAleatorio = () => {
        let index = Math.floor(Math.random() * seguros2.length);
        return seguros2[index];
      };

      alert(
        "Te ganaste el siguiente seguro por 1 año totalmente gratis: " +
          seguroAleatorio()
      );
    }
  }
  if (continuar === "2") alert("Saliendo del simulador...");

  continuar;

  salida = prompt(
    "Ingresa 1 para volver a calcular un prestamo o 0 para salir."
  );

  if (salida === "0") alert("Hasta la proxima...");
}
