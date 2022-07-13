module.exports = function(app){
    const user = require('./dateController');
    
    //날짜 선택 API
    app.post('/app/date', date.postDate);

};