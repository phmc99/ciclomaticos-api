import { AppDataSource } from "./data-source";
import app from "./app";

const init = async () => {
  const PORT = process.env.PORT || 3000;
  const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`;

  await AppDataSource.initialize();
  app.listen(PORT, () => {
    console.log(`App is running on ${BASE_URL}`);
  });
}

init();
