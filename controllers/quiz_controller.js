//el controlador importa el modelo para acceder a la BD
var models = require('../models/models.js');

/* GET quizes/question */
exports.question = function(req, res) {
  models.Quiz.findAll().success(function(quiz) {
    res.render('quizes/question', { pregunta: quiz[0].pregunta })
})      //*****************
};

/* GET quizes/answer */
exports.answer = function(req, res) {
  models.Quiz.findAll().success(function(quiz) {
  if (req.query.respuesta.toLowerCase() === quiz[0].respuesta.toLowerCase()) {
    res.render('quizes/answer',{ respuesta: 'Correcta'});
  }
  else {
    res.render('quizes/answer',{ respuesta: 'Incorrecta'});
  }
})
};
