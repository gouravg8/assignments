import express,{Request, Response} from 'express'
const app = express();

const PORT = 3000;

app.get("/", (req: Request, res:Response)=>{ 
	res.json({message:"hello from home"});
})

app.get("/suar", (req:Request, res:Response)=>{
	res.json({message:"hello suar biro"});
});

app.listen(PORT,()=>console.log(`port is start on ${PORT}`));
