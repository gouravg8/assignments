export default {
	async fetch(request, env, ctx): Promise<Response> {
		return Response.json({message:"how are you biro", request, env, ctx})
	},
} satisfies ExportedHandler<Env>;
