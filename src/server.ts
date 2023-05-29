import mongoose from "mongoose";
import app from "./app";
import config from "./config";

//Database Connection
async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("DB connection successful");

    app.listen(config.port, () => {
      console.log("Server listening to: ", config.port);
    });
  } catch (error) {
    console.log("Failed to connect: ", error);
  }
}

bootstrap();
