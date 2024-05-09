import { MongoClient } from "mongodb";
import express from 'express';
import env from 'dotenv';
import bodyParser from 'body-parser';
import { error } from "console";
const port: number = 3000
const app = express();
async function start() {
   try {
      console.log(process.env.URL)
      const mongo = await MongoClient.connect('mongodb+srv://stevens5@admin:stevens5@atlascluster.ja1npug.mongodb.net')
      await mongo.connect();
      app.db = mongo.db();

      app.use(body.json({
         limit: '500kb'
      }))

      app.use('/customers', require('.routes/customers'));

      app.listen(port, () => {
         console.log(`Server is running on port ${port}`)
      })
   }catch(error) {
      console.log(error); 
   }
   
}