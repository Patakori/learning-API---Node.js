import { Router } from 'express';

import { listCategoriesController } from '../modules/cars/listCategories';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

// Constate que chamara um methodo para criar a rota
const categoriesRoutes = Router();

// Importando create, utilizando o new para sempre cadastrar um novo usuário

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
