require('dotenv').config()
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
      .then(()=>{
        console.log("Connected to the Database")
      })
  } catch (error) {
    console.log(error)
  }
}