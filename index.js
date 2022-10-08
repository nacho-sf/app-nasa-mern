const express = require('express');

const landRouter = require('./routes/landRoutes')
const userRouter = require('./routes/userRoutes')

const manage404 = require('./middlewares/error404')

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api/astronomy/landings", landRouter);
app.use("/api/users", userRouter);

app.use(manage404);

app.listen(port, () => {
    console.log(`El servidor funciona en el puerto ${port}`);
  });