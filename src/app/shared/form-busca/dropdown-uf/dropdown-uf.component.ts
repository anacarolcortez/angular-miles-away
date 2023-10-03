import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { UnidadesfederativasService } from 'src/app/core/services/unidadesfederativas.service';
import { UnidadesFederativas } from 'src/app/core/types/type';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent implements OnInit {
  @Input() label: string = ''
  @Input() matPrefix: string = ''

  filteredOptions = []
  unidadesFederativas: UnidadesFederativas[] = []

  constructor(private ufService: UnidadesfederativasService){

  }

  ngOnInit(): void {
    this.ufService.listar().subscribe(
      dados => this.unidadesFederativas = dados
    )
  }
}
