import app from "./src/app.js";
import "dotenv/config";

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server running on: https://conectamaranhao.onrender.com`);
});