import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.css']
})
export class ImagemComponent implements OnInit {

  constructor() { }
  urlImage = 'http://lorempixel.com/400/400/people/'

  ngOnInit() {
  }

  alteraImagemClick(){
    this.urlImage = 'http://lorempixel.com/400/400/animals/'
  }

}
