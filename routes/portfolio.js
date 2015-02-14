/*
 * GET index.
 */

exports.index = function(req, res){
    res.render('portfolio', { title: 'Portfolio' });
};

/*
 * GET projects.
 */

exports.getProjects = function(req, res){
    var db = req.db;
    db.collection("projects").find().toArray(function (error, projects) {
        res.json(projects);
    });
    res.render('');
};