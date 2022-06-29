const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let lessonArray= {
  K1: [3,3],
  K2: [3,4],
  K3: [4,4],
  K4: [5,5],
  K5: [4,3],
  K6: [4,4],
  K7: [4,3],
  K8: [4,4],
  K9: [4,4],
  K10: [4,4],
  K11: [3,3],
  K12: [3,4],
  K13: [5,4],
  K14: [4,4],
  K15: [3,4],
  K16: [4,4],
  K17: [4,4],
  K18: [4,4],
  K19: [3,4],
  K20: [4,4],
  K21: [4,4],
  K22: [4,3],
  K23: [4,4],
  K24: [4,3],
  K25: [4,5],
  K26: [4,4],
  K27: [6,5],
  K28: [4,4],
  K29: [4,5],
  K30: [4,3],
  A1: [3,5],
  A2: [4,3],
  A3: [4,4],
  A4: [4,4],
  A5: [5,5],
  A6: [4,4],
  A7: [5,5],
  A8: [4,4],
  A9: [4,4],
  A10: [5,5],
  A11: [5,5],
  A12: [3,4],
  A13: [5,4],
  A14: [4,4],
  A15: [3,4],
  A16: [4,4],
  A17: [4,4],
  A18: [4,4],
  A19: [3,3],
  A20: [4,4],
  A21: [4,4],
  A22: [4,3],
  A23: [4,4],
  A24: [4,3],
  A25: [4,4],
  A26: [4,4],
  A27: [4,4],
  A28: [4,4],
  A29: [4,3],
  A30: [4,3],
  B1: [3,4],
  B2: [4,4],
  B3: [4,4],
  B4: [4,4],
  B5: [5,5],
  B6: [4,4],
  B7: [5,5],
  B8: [4,4],
  B9: [4,4],
  B10: [4,3],
  B11: [4,4],
  B12: [5,4],
  B13: [5,4],
  B14: [5,4],
  B15: [3,4],
  B16: [4,4],
  B17: [4,4],
  B18: [4,5],
  B19: [4,4],
  B20: [4,4],
  B21: [4,4],
  B22: [4,4],
  B23: [4,4],
  B24: [4,5],
  B25: [4,4],
  B26: [4,4],
  B27: [4,4],
  B28: [4,4],
  B29: [4,4],
  B30: [4,4]
}

app.get("/en/", function(req, res){
  res.render("home-en");
});

app.get("/", function(req, res){
  res.redirect("/en/");
});

app.get("/en/games", function(req, res){
  res.render("games-en");
});

app.get("/en/breakout", function(req, res){
  res.render("breakout");
});

app.get("/en/about", function(req, res){
  res.render("about-en");
});

app.get("/en/lessons", function(req, res){
  res.render("lessons-en");
});

app.get("/en/resources", function(req, res){
  res.render("resources-en");
});

app.get("/jp/", function(req, res){
  res.render("home-jp");
});

app.get("/jp/games", function(req, res){
  res.render("games-jp");
});

app.get("/jp/about", function(req, res){
  res.render("about-jp");
});

app.get("/jp/lessons", function(req, res){
  res.render("lessons-jp");
});

app.get("/jp/resources", function(req, res){
  res.render("resources-jp");
});

app.get("/en/:lessonName", function(req, res){
  let vol = lessonArray[req.params.lessonName]
    res.render("audio-en", {
    LessonVol: vol,
    Lesson: req.params.lessonName,
    files1: ["../audio/" + req.params.lessonName + "_1_1.mp3",
            "../audio/" + req.params.lessonName + "_1_2.mp3",
            "../audio/" + req.params.lessonName + "_1_3.mp3",
            "../audio/" + req.params.lessonName + "_1_4.mp3",
            "../audio/" + req.params.lessonName + "_1_5.mp3"],
    files2: ["../audio/" + req.params.lessonName + "_2_1.mp3",
            "../audio/" + req.params.lessonName + "_2_2.mp3",
            "../audio/" + req.params.lessonName + "_2_3.mp3",
            "../audio/" + req.params.lessonName + "_2_4.mp3",
            "../audio/" + req.params.lessonName + "_2_5.mp3"] });
});

app.get("/jp/:lessonName", function(req, res){
  let vol = lessonArray[req.params.lessonName]
    res.render("audio-jp", {
    LessonVol: vol,
    Lesson: req.params.lessonName,
    files1: ["../audio/" + req.params.lessonName + "_1_1.mp3",
            "../audio/" + req.params.lessonName + "_1_2.mp3",
            "../audio/" + req.params.lessonName + "_1_3.mp3",
            "../audio/" + req.params.lessonName + "_1_4.mp3",
            "../audio/" + req.params.lessonName + "_1_5.mp3"],
    files2: ["../audio/" + req.params.lessonName + "_2_1.mp3",
            "../audio/" + req.params.lessonName + "_2_2.mp3",
            "../audio/" + req.params.lessonName + "_2_3.mp3",
            "../audio/" + req.params.lessonName + "_2_4.mp3",
            "../audio/" + req.params.lessonName + "_2_5.mp3"] });
});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

// app.listen(port, function() {
//   console.log("Server started on port " + port);
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Our app is running");
});
