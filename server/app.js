module.exports = function(app) {
    //var model = require("./model/models.server")(app);
    require("./services/crypto.service.server.js")(app);

};