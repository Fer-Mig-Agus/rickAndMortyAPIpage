const express=require("express");
const morgan=require("morgan");
const cors=require("cors");
const router=require("../router/index");


const server=express();


server.use(morgan("dev"));
server.use(cors());
server.use(express.json());



server.use("/",router);


module.exports=server;



