const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://doadmin:T971H562EDlRx04c@db-mongodb-blr1-77748-8be691c1.mongo.ondigitalocean.com/hiring?authSource=admin&replicaSet=db-mongodb-blr1-77748&tls=true';
const client = new MongoClient(url);

async function hiring() {
    let result = await client.connect();
     let db = result.db('hiring');
  return db.collection('hires');
  }
  hiring().then((res)=>{
    res.find({}).toArray().then((data)=>{
       console.warn(data);
    });
    });
    console.log('Hiring is setup');
module.exports=hiring;    