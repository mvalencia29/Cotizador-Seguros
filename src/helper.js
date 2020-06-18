// Diferencia de años
export function obtenerDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

// Total a pagar segun la marca
export function calcularMarca(marca) {
  let incremento;

  switch (marca) {
    case "Americano":
      incremento = 1.30;
      break;
    case "Europeo":
      incremento = 1.50;
      break;
    case "Asiatico":
      incremento = 1.15;
      break;
    default:
      break;
  }

  return incremento;
}

// Calcular el tipo de seguro
export function calcularTipoSeguro(plan) {
  return plan === "Básico" ? 1.2 : 1.5;
}
