import { DepoimentoService } from 'src/app/core/services/depoimento.service';
import { Depoimento } from './../../../core/types/type';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depoimentos',
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss']
})
export class DepoimentosComponent implements OnInit {

  depoimentos!: Depoimento[];

  constructor(private service: DepoimentoService) {
  }

  ngOnInit(): void {
    this.service.listar().subscribe(
      res => this.depoimentos = res
    )
  }
}
