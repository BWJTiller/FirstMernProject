const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
 
var _db;
module.exports = {
  connectToServer: async function () {
    try{
        const db = await client.connect();
        //verify db object
        if(db){
            _db = db.db("employees");
            console.log(" 📖 Successfully Connected To Database");
        }
        return _db;
    }catch(err){
        throw err;
    }
  },
 
  getDb: function () {
    return _db;
  },
};