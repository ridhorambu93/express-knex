const express = require("express");
const app = express();
const port = 3000;
const bodyParse = require("body-parser");
const bodyParser = require("body-parser");
const controller = require("./controller/RiceBowl");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(
  bodyParser.json({
    limit: "8mb",
  })
);

app.get('/getAll', controller.getAll)

app.get('/get/:id', async function(req, res){
    const getById = await controller.getById(req)
    res.status(getById.code).json(getById)
})

app.post('/create', controller.create)

app.put('/:id/update', async function(req, res){
  const updateData = await controller.updateData(req)
  res.status(updateData.code).json(updateData)
})

app.delete('/:id/delete', controller.deleteData)

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
