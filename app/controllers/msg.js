const Msg = require('../models/msg')

// team add page
exports.save = function(req, res) {
  let _msg
  _msg = new Msg({
    name: '',
    email: req.body.email,
    phone: req.body.phone,
    title: req.body.title,
    msg: req.body.msg
  })

  _msg.save(function(err, msg) {
    var respObj = {}; //Initial response object

    if(err) {
      respObj = {
          error: `Error trying to subscribe. Please try again.`,
          message: msg
        };
    } else {
      respObj = {
          success: `Success`,
          message: msg
        };
    }

    return res.send(respObj);
  })
}
