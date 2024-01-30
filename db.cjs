const {MongoClient}=require('mongodb')
let db
function connectdb(startserver){
    MongoClient.connect('mongodb://127.0.0.1:27017/expresstracker').then(function(client){
    db=client.db()
    return startserver()
    }).catch(function(error){
        return startserver(error)
    })

    console.log(db)

}
function getdb(){
    return db
}

module.exports={connectdb,getdb}