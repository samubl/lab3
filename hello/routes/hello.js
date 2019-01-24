
/*
 * GET home page.
 */

exports.view = function(req, res){
  var name = req.params.userName;
  console.log("name is" + name);
  if (name == null) name = "World";
  res.render('index', {
  	'name': name,
  });
};
