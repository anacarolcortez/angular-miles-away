import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
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
  @Input() control!: FormControl

  filteredOptions = []
  unidadesFederativas: UnidadesFederativas[] = []
  filteredOptions$?: Observable<UnidadesFederativas[]>

  constructor(private ufService: UnidadesfederativasService){}

  ngOnInit(): void {
    this.ufService.listar()
      .subscribe(dados => {
        this.unidadesFederativas = dados
      })
    this.filteredOptions$ = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this.filtrarUfs(value))
    )
  }

  filtrarUfs(value: string): UnidadesFederativas[] {
    const valorFiltrado = value?.toLowerCase();
    const result = this.unidadesFederativas.filter(
      estado => estado.nome.toLowerCase().includes(valorFiltrado)
    )
    return result
  }
}
