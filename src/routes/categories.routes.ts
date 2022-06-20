import { Router } from 'express';
import multer from 'multer';

// importando as responsabilidades que serão utilizadas nessa rota
import { listCategoriesController } from '../modules/cars/listCategories';
import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { importCategoryController } from '../modules/cars/useCases/importCategory';

// constate que chamara um methodo do express para criar a rota
const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

// criando uma rota do tipo post
categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

// criando uma rota do tipo get
categoriesRoutes.get('/', (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
