import { v4 as uuidV4 } from 'uuid';

class Category {
  // types de categoria, como se fosse um iterface do react
  id?: string;
  name: string;
  description: string;
  created_at: Date;

  // Construtor que vai verificar se o id existe ou não, caso não existir vai gerar um novo
  constructor() {
    if (!this.id) {
      // uuidB4 gera um id random, sendo ele uma string
      this.id = uuidV4();
    }
  }
}

export { Category };
