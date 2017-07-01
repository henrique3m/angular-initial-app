import { Injectable } from '@angular/core';

@Injectable()
export class PesquisaimagemService {

  constructor() { }
  
  getImagens(){
      return ['Album 1', 'Album 2', 'Album 3'];  
  }


}
