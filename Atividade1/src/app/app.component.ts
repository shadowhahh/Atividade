import { Component } from '@angular/core';
import { alunos } from './arquivo'; /* Importa o array alunos do arquivo.ts para preenchimento do corpo da tabela*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent {
  title = 'Atividade1';
  lista_alunos = alunos;

}
