import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  // eslint-disable-next-line prettier/prettier
  constructor(private categoriesRepository: ICategoriesRepository) { }

  execute({ name, description }: IRequest): void {
    // Pega a função que procura um nome no array das categorias
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    // Se existir um nome na tabela, irá entrar no if e mostrar que já existe uma categoria daquela criada
    // e não permite cadastrar, caso não exista ele nao passa pelo if e faz um novo cadastro
    if (categoryAlreadyExists) {
      throw new Error('Category already exists!');
    }

    // Repositories responsavel por criar categorias q recebe dois parametros do request.body
    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
