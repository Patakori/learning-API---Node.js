// importando o express
import express from 'express';
import swaggerUi from 'swagger-ui-express';

import { router } from './routes';
import swaggerFile from './swagger.json';

// importando o index de routes

// passando a função do express pra uma constante pra poder chamar as rotas
const app = express();

// passando express json pra poder gerar o resultado em json
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// chamando as rotas com use do express
app.use(router);

// utilizando o listem para definir a porta pra rodar o server
app.listen(3333, () => console.log('Server is running!'));
