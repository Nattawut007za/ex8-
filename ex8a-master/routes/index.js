var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var fs = require('fs');
function file_readline(fav_team){  
  let cnt =0;
  const contents = fs.readFileSync('public\\input.txt', 'utf-8');
  contents.split(/\r?\n/).forEach(line =>  {
    console.log(`Line from file: ${line}`);
    if(line == fav_team)cnt++;
  });
  return cnt;
}

router.get('/wordcnt', function(req, res, next) {
  let fav_team = req.params.fav_team
  let cnt =file_readline(fav_team);
  let heading ="<h2> word count Result</h2>";
  let str1 = "You favorite team -> <b>"+fav_team+"</b><br>";
  let str2 = "Number of occurrences -> <b>"+cnt+"</b><br>";
  res.send(heading+str1+str2);
});


module.exports = router;
