import { OpenAPI, ReferenceObject, SchemaObject } from 'swagger-parser';

interface APIResource {
	name: string;
	properties: Property[];
	// other properties
}

interface Property {
	name: string;
	type: string;
	isOptional: boolean;
}

class ModelGenerator {
	private api: OpenAPi.Document;

	constructor(apispec: OpenAPI.Document) {
		this.api = apispec;
	}
public generateModels(): APIResource[] {
	const resources: this.extractResources();
	//Transform resources into APIResource objects
	return resources;
}

private extractResources(): SchemaObject[] {
	const resources: SchemaObject[] = [];
	Object.keys(this.api.components.schemas).forEach((key) => {
		const schema = this.api.components.schemas[key];
		if (this.isResource(schema)) {
			resources.push(schema);
		}
	});
	return resources;
}

private isResource(schema: SchemaObject): boolean {
	return schema.type === 'object';
}

private mapType(schema: SchemaObject | ReferenceObject): string {
	if (schema.type === 'array') {
		return `Array<${this.mapType(schema.items)}>`;
	} else if (schema.type === 'object') {
		return 'object';
	} else {
		return schema.type;
	}
}


