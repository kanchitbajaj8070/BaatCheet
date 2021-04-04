const express=require('express');
const app=express();
const port=8000;

app.listen(port,(error)=>{
    if( error)
    {
        console.log(`Error in running the server:${error}`);
        //new way of embedding strings in the string(interpolation of strings)
        return;
    }
    console.log(`Server is up and runnign succesfully on port: ${port}`);
})