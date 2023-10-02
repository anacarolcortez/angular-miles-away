import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-card-depoimentos',
  templateUrl: './card-depoimentos.component.html',
  styleUrls: ['./card-depoimentos.component.scss']
})
export class CardDepoimentosComponent {
  depoimento: String = "O aplicativo simplificou demais a minha viagem, desde a escolha do destino até a compra do pacote. Recomendo muito!"
  autor: String = "Lorem Ipsum"
}
