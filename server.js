const express=require("express")
const cors = require("cors")
//inicializar 
const user = require("./routes/user");
const app=express()

// parse requests of content-type - application/json
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));  // enable CORS

app.use(express.urlencoded({ extended: false }));



// simple route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
  
});


app.use("/user", user);
// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});