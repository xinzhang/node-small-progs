
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/notes');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {console.log('connected')});

var NoteModel = mongoose.model('Note', {title: 'string', body: 'string'});

const list = () => {
  NoteModel.find({}, function(err, res){
    if (err) return console.error(err);
    res.forEach( x=> {
      console.log(x);
    })
    mongoose.disconnect();
  })
}

const add = (title,body)=> {
  var n = new NoteModel({title, body});
  n.save(function(err, res){
    if (err) return console.error(err);
    console.log('note added:', res);
    mongoose.disconnect();
  })
}

const remove = (title) => {
  NoteModel.remove( {title}, function(err){
    if (err) return console.error(err);
    console.log('note removed:', title);
    mongoose.disconnect();
  })
}

module.exports =  {
  add,
  list,
  remove
}
