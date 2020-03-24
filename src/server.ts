import app from "./app";
const config = require("./utils/config");
const PORT = config.SERVER_PORT;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;
