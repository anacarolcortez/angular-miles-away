import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-seletor-quantidade',
  templateUrl: './seletor-quantidade.component.html',
  styleUrls: ['./seletor-quantidade.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SeletorQuantidadeComponent),
      multi: true
    }
  ]
})
export class SeletorQuantidadeComponent implements ControlValueAccessor {
  @Input() titulo: string = ''
  @Input() subtitulo: string = ''

  value: number = 0
  onChange = (value: number) => {}
  OnTouched = () => {}

  writeValue(value: any): void {
    this.value = value
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.OnTouched = fn
  }

  setDisabledState?(isDisabled: boolean): void {
    
  }

  incrementar() {
    this.value += 1
    this.onChange(this.value)
    this.OnTouched()
  }

  decrementar() {
    if (this.value > 0){
      this.value -= 1
      this.onChange(this.value)
      this.OnTouched()
    }
  }
}
