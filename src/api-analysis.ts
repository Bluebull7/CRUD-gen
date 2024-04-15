import { OPENAPI, ReferenceObject, SchemaObject, ParameterObject } from 'swagger-parser';
import { InterfaceDeclaration, TypeAlisasDeclaration, PropertySignature } from 'typescript';


export class OpenAPIAnalyzer {

	// analyze method 
	//
	public extractEndpoints(document: OpenAPI.Document): Endpoint[] = [];

