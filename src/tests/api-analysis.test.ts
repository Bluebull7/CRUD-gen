import { spec } from 'node:test/reporters';
import parseOpenApiSpec from '../api-analysis/analyzer.ts';
import path from 'path';

describe('OpenAPIAnalyzer', () => {
	it('should extract endpoints correctly',  async() => {
		const specPath = path.resolve(__dirname, '.', 'sampleAPISpec.json');
		const analyzer = new parseOpenApiSpec(specPath);
		const document = await analyzer.analyze(sampleAPIspec);
		const endpoints = analyzer.extractEndpoints(document);
		
	expect(endpoints).toEqual([
		{ path: '/books', method: 'get' },
		{ path: '/books', method: 'post' },
		{ path: '/books/{id}', method: 'get' },
		{ path: '/books/{id}', method: 'put' },
		{ path: '/books/{id}', method: 'delete' }
	]);
});
});
