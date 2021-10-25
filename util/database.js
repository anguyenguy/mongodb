const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://quan:quan1997@cluster0.l3abt.mongodb.net/shop?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let _db;

async function mongoConnect(){
    const uri = "mongodb+srv://quan:quan1997@cluster0.l3abt.mongodb.net/shop?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    try {
        // Connect to the MongoDB cluster
        await client.connect();

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
