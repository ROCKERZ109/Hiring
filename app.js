const express = require('express');
const app = express();
const hiring = require('./hiring')


app.use(express.json({
    type: ['application/json', 'text/plain']
  }));
  

  app.get('/hiringData', async (req, res) => {
    let data = await hiring();
    let ress = await data.find({}).toArray();
    res.send(ress);
  });
  

app.post('/roles/sendData',async(req,res)=>{
    let data = await hiring();
    console.log(req.body);
    let result = await data.insertOne(req.body);
       console.log("enterd");
       if(result.acknowledged)
       {
        res.send('Pushed');
       }
       else
       {
        res.send('not pused');
       }
     
    });

console.log("running on 5002");
app.listen(5500);
module.exports = app;