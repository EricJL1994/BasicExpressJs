const express = require("express")
const app = express()
app.set("view engine", "pug");
app.locals.basedir = __dirname + "/views"
app.set("views", __dirname + "/views");
// app.use(express.static(__dirname + "/public"));

const port = process.env.PORT || 3000
const server = app.listen(port, () => {
  console.log("Server running on port", port)
})

app.get("/", (req, res) => {
  res.render("index")
})

app.use((req, res, next) => {
  res.render('404.pug')
})

// app.get("*", function(err, req, res, next){
//   if (err instanceof NotFound) {
//       res.render('404.pug');
//   } else {
//       next(err);
//   }
// });