const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3001;

app.use(express.json())
app.use(cors())

app.get("/", (req, res)=>{
  res.status(200).json({message: 'Server OK!'})
})

app.listen(PORT, ()=>{
  console.log(`Server started at port ${PORT}`)
})