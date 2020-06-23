import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc  from 'swagger-jsdoc';
const swaggerRoutes = Router();

const swaggerOptions = {
	swaggerDefinition: {
		info: {
			title: 'Teste API',
			description: 'Test API Information',
			version: '1.0.1'
		}
	},
	apis: ['server.ts']
}

const swaggerDocument = swaggerJsDoc(swaggerOptions);
swaggerRoutes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default swaggerRoutes;