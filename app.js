const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT||3000;
 app.use(bodyParser{extended:true});

 app.use()
app.listen(PORT,()=>{
	console.log("Server is running at  "+ PORT);
})