export interface Cartao {
  numero: string;
  codigo: string;
  tipo: 'ambos' | 'credito' | 'debito';
  bandeira: string;
  limite: number;
}
