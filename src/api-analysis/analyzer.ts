import SwaggerParser from '@apidevtools/swagger-parser';

async function parseOpenAPISpec(file: string) {
     try {
	const api = await SwaggerParser.validate(file);
	console.log("API name: %s, Version: %s", api.info.title, api.info.version);
	return api;
     }  catch (err) {
	console.error("Failed to parse API specification: " ,err);
     }
}

export { parseOpenAPISpec };


