export default {
	async fetch(request, env, ctx): Promise<Response> {
		// if (request.method === 'GET' && request.url.includes('/hi')) {
		// 	return new Response('hii from the get route');
		// } else 
		return Response.json({ message: 'how are you biro', request, env, ctx });
	},
} satisfies ExportedHandler<Env>;
