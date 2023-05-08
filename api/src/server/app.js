const express=require("express");
const morgan=require("morgan");
const cors=require("cors");
const router=require("../router/index");


const server=express();


server.use(morgan("dev"));
server.use(cors());
server.use(express.json());

const local = "http://localhost:3000"
const versel = "https://pi-dogs-mf.vercel.app"

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', local); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});




server.use("/",router);


module.exports=server;



