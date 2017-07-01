import { Component, OnInit } from '@angular/core';
import { PesquisaimagemService} from '../pesquisaimagem.service';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent implements OnInit {

 constructor(private pesquisaImagemService: PesquisaimagemService) { }

  imagensArray: any[];

  ngOnInit() {
  }

  pesquisaImagem(){    
    this.imagensArray = this.pesquisaImagemService.getImagens();
  }

}
