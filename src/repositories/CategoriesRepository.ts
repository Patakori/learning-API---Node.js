import { Category } from "../model/Category";

//Interface do create
interface ICreateCategoryDTO {
  name: string;
  description: string;
}


class CategoriesRepository {
  //Acesso privado e não publico, typagem igual interface
  private categories: Category[];

  constructor(){
    //para chamar o atributo do "interface" das typagens
    this.categories = [];
  }
  //Cadastro de categorias
  create({name, description}: ICreateCategoryDTO): void{
    //Vai gerar um novo objeto contento a class category, e ira armazenar na const category
    const category = new Category();
    
    //Pega a const category nova que já vai vir ou nao com o id, e colocara mais itens a const category
    Object.assign(category, {
      name,
      description,
      created_at: new Date(),

    })
    //Pega a constante category com todas as informaçõe e manda pro array, onde ficará armazenada (fake bd)
    this.categories.push(category)
  }
  //Retorna a lista de categorias
  list(): Category[] {
    return this.categories
  }
  //Procura no array de categorias se o nome passado no body
  findByName(name:string): Category {
    const category = this.categories.find((category) => category.name === name)
    return category
  }
}

export { CategoriesRepository }