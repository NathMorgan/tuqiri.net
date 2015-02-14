
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Home' });
};

/*
 * GET about.
 */

exports.about = function(req, res){
    res.render('about', { title: 'About' });
};

/*
 * GET contact.
 */

exports.contact = function(req, res){
    res.render('contact', { title: 'Contact' });
};

/*
 * GET contact.
 */

exports.bug = function(req, res){
    res.render('bug', { title: 'Bug' });
};