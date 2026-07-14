import mongoose from "mongoose";

const connect_db = async () => {
  try {
    await mongoose.connect(process.env.db_URI);
    console.log("Connected to database");
  } catch (err) {
    console.log("Error connecting to database !");
    console.log("Error : ", err);
  }
};

export default connect_db;
