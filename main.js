//Sistema de simulador de creditos.

let montoDelCredito; //variable que guarda el monto del prestamo que ingresa el usuario.

let numeroDeCuotas; //Variable que guarda el numero de cuotas del prestamo.

let montoTotalDelCredito; //Se guarda el monto que termina pagando el usuario por el prestamo.

let montoTotalDeCuotas; //Se guarda el monto total de cada cuota.s

let salida; //Realiza la bandera al While para salir del simulador.

let continuar; //Sirve como bandera para continuar en un segmento del programa.

alert("Bienvenido al simulador de Créditos del Sweden Bank.");

salida = prompt("Ingrese 1 para inciar o 0 para salir: ");

//Ciclo While para que el usuario puedan entra a realizar los calculos o pueda salir del simulador.

while (salida != "0" && continuar != "2") {
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

  if (continuar === "2") {
    alert("Saliendo del simulador...");
  }

  continuar;

  salida = prompt(
    "Ingresa 1 para volver a calcular un prestamo o 0 para salir."
  );

  if (salida === "0") alert("Hasta la proxima...");
}
