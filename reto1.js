function obtenerIniciales(nombreCompleto) {
  if (typeof nombreCompleto !== 'string' || nombreCompleto.trim() === '') {
    return 'Entrada inválida';
  }
  const nombre_dividido =  nombreCompleto
    .trim()
    .split(' ')
    .map((nombre) => nombre[0])
    .join('')

  return nombre_dividido.toUpperCase();
}

console.log(obtenerIniciales('kendy yaritza franco'));
console.log(obtenerIniciales('karen  yaritza escpobar'));
console.log(obtenerIniciales('  Cristian  Yair  Ropero  '));
console.log(obtenerIniciales(''));