const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/astronomy/landings", landRouter);
app.use("/api/users", userRouter);

app.listen(port, () => {
    console.log(`El servidor funciona en el puerto ${port}`);
  });