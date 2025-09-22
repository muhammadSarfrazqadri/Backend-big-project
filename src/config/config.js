 const mongoose =  require(`mongoose`)

 const uri =  `mongodb+srv://msownerbest_db_user:Db12345@cluster0.rpl32ro.mongodb.net/
async function connectDB() {
    await mongoose.connect(uri)
}

module.exports =  {
    connectDB
}
