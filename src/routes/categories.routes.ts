import { Router } from 'express';

import { CategoriesRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryService } from '../services/CreateCAtegoryService';

// Constate que chamara um methodo para criar a rota
const categoriesRoutes = Router();

// Importando create, utilizando o new para sempre cadastrar um novo usuário
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request, response) => {
  // Informações vindas do body
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get('/', (request, response) => {
  const all = categoriesRepository.list();

  return response.json(all);
});

export { categoriesRoutes };
