import mongooes, { connect } from "mongoose";

export const connectDB = async () => {
  try {
    const conn =await mongooes.connect(process.env.MONGO_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("DB Error:", error.message);
    process.exit(1);
  }
};
