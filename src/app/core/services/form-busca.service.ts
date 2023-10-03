import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class FormBuscaService {

  formGroup: FormGroup

  constructor() {
    this.formGroup = new FormGroup({
      somenteIda: new FormControl(false)
    })
  }
}
