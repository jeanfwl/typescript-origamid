// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.

function arredondar(valor: string) : string;
function arredondar(valor: number) : number;
function arredondar(valor: number | string) : number | string {
  if (typeof valor === 'number') {
    return Math.ceil(valor);
  } else {
    return String(Math.ceil(Number(valor)));
  }
}

console.log(arredondar(2.5));
console.log(arredondar('3.7'));