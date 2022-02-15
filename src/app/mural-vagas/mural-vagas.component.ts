import { Component, OnInit } from '@angular/core';
import { Vagas } from '../models/Vagas.models';
import { VagasService } from '../vagas.service';

@Component({
  selector: 'app-mural-vagas',
  templateUrl: './mural-vagas.component.html',
  styleUrls: ['./mural-vagas.component.css']
})
export class MuralVagasComponent implements OnInit {

  public vagas: Vagas[] = [];
  
  constructor(private _VagasService: VagasService) { }

  ngOnInit(): void {
    this.listarVagas();
  }

  listarVagas() {

    this._VagasService.getVagas()
    .subscribe(
      retornaVaga => {
        this.vagas = retornaVaga.map(
          item=>{
            return new Vagas(
              item.id,
              item.nome,
              item.foto,
              item.descricao,
              item.salario
            );
          }
        )  
      }
    )

  }

}
