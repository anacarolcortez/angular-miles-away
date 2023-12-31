export interface Promocao {
  id: number,
  destino: string,
  imagem: string,
  preco: number
}

export interface Depoimento {
  id: number,
  texto: string,
  autor: string,
  avatar: string
}

export interface UnidadesFederativas {
  id: number,
  nome: string,
  sigla: string
}
