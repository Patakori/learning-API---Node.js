import { Category } from '../model/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from './ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  // Acesso privado e não publico, typagem igual interface
  private categories: Category[];

  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: CategoriesRepository;

  private constructor() {
    // para chamar o atributo do "interface" das typagens
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

  // Cadastro de categorias
  create({ name, description }: ICreateCategoryDTO): void {
    // Vai gerar um novo objeto contento a class category, e ira armazenar na const category
    const category = new Category();

    // Pega a const category nova que já vai vir ou nao com o id, e colocara mais itens a const category
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });
    // Pega a constante category com todas as informaçõe e manda pro array, onde ficará armazenada (fake bd)
    this.categories.push(category);
  }
  // Retorna a lista de categorias
  list(): Category[] {
    return this.categories;
  }
  // Procura no array de categorias se o nome passado no body
  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}

export { CategoriesRepository };
