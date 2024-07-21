import { Hono } from 'hono'

const app = new Hono()

// body, headers, query params,  middlewares, connecting to db
app.get('/', async(c) => {
  const body = await c.req.json()

  console.log('body', body);
  console.log('header', c.req.header('Authorization'));
  console.log('query', c.req.query('param'));
  
  
  
  return c.json({
    message: 'Hello Hono',
  })
})

export default app
