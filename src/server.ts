// importando o express
import express from 'express';

// importando o index de routes
import { router } from './routes';

// passando a função do express pra uma constante pra poder chamar as rotas
const app = express();

// passando express json pra poder gerar o resultado em json
app.use(express.json());

// chamando as rotas com use do express
app.use(router);

// utilizando o listem para definir a porta pra rodar o server
app.listen(3333, () => console.log('Server is running!'));
