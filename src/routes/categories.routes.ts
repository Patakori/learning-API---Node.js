import { Router} from "express"
import { CategoriesRepository } from "../repositories/CategoriesRepository";

//Constate que chamara um methodo para criar a rota
const categoriesRoutes = Router()

//Importando create, utilizando o new para sempre cadastrar um novo usuário
const categoriesRepository = new CategoriesRepository()

categoriesRoutes.post("/", (request, response) => {
  //Informações vindas do body
  const { name, description } = request.body;

  //Pega a função que procura um nome no array das categorias
  const categoryAlreadyExists = categoriesRepository.findByName(name)

  //Se existir um nome na tabela, irá entrar no if e mostrar que já existe uma categoria daquela criada
  //e não permite cadastrar, caso não exista ele nao passa pelo if e faz um novo cadastro
  if(categoryAlreadyExists){
    return response.status(400).json({ error: "Category Already Exists!" })
  }

  //Repositories responsavel por criar categorias q recebe dois parametros do request.body
  categoriesRepository.create({ name, description })

  
  return response.status(201).send()

})

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list()

  return response.json(all)
})

export { categoriesRoutes }