const app=require('./app');
const connectDB=require('./config/db');
const UserModel=require('./model/user.model')
const StaffModel = require("./model/staff_model");
const port = 3000;
const http=require('http');
connectDB();
app.get('/',(req,res)=>{
    res.send("Hello world");
}
)

app.listen(port,()=>{
    console.log(`Server listening on port http://localhost:${port}`);
})