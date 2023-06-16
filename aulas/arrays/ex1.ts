// Defina a interface da API: https://api.origamid.dev/json/cursos.json e mostre os dados na tela.

// Existem apenas dois níveis de cursos, Iniciante (iniciante) e Avançado (avancado). 
// Se for para iniciante pinte o título de azul, para avançado pinte de vermelho.

interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  nivel: 'iniciante' | 'avancado';
  tags: Array<string>;
  idAulas: Array<number>;
}

async function fetchCursos() {
const response = await fetch('https://api.origamid.dev/json/cursos.json');
const data = await response.json();
mostrarCursos(data);
}

fetchCursos();

function mostrarCursos(cursos: Array<Curso>) {
  cursos.forEach(curso => {
    document.body.innerHTML += `
      <div>
          <h2 style="color: ${curso.nivel === 'iniciante' ? 'blue' : 'red' }">
              ${curso.nome}
          </h2>
          <p>Aulas: ${curso.aulas}</p>
          <p>Horas: ${curso.horas}</p>
          <p>Gratuito: ${curso.gratuito ? 'Sim' : 'Não'}</p>
      </div>
    `;
  });
}