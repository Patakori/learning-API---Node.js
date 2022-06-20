// importando Router do express
import { Router } from 'express';

// importando as rotas do useCases
import { categoriesRoutes } from './categories.routes';
import { specificationRoutes } from './specifications.routes';

// passando a função router do express pra uma constante pra poder usar
const router = Router();

// criando as rotas e importando suas rotas
router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationRoutes);

export { router };
