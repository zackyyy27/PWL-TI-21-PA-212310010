const { Messengers, Users} =require("../../models");
const { get } = require("../routes/MessengerRoute");

exports.index = async (req,res) => {
    res.json ({
        status:200,
        message:"prefix for end-poin messenger"
    });
};

exports.createData = async(req,res) => {
    const payloadData = req.body;
    try {
        const results = await Messengers.create(payloadData);
        res.json({
            status :200,
            data:results,

        });
    } catch (error) {
        res.json({
            status :200,
            message:{
                internal:error.Message,
                user:"error createing message",
            },
            errors: error.errors,
        });

    }
};

exports.getAll = async (req,res) => {
    try {
        const results = await messengers.findAll({
            include: [
                { model : Users, as : 'Sender'},
                { model : Users, as : 'Receiver'}
            ]
        });
        res.json({
            status:200,
            data: results,
        });
    } catch (error){
        res.json({
            status:502,
            message:{
                internal: error.Message,
                user: "Failed retrive data",
            },
            errors:error.errors,
        });
    }
};

exports.getByID = async (req, res) => {
    const msg_id = req.params.id;
    try {
      const results = await Messengers.findByPk(msg_id);
      res.json({
        status: 200,
        data: results,
      });
    } catch (error) {
      res.json({
        status: 502,
        message: {
          internal: error.message,
          user: "Failed retrive data",
        },
        errors: error.errors,
      });
    }
  };

  exports.updatedData = async (req, res) => {
    const payloadData = req.body;
  
    try {
      const results = await Messengers.update(payloadData, {
        where: {
          id: payloadData.id,
        },
      });
  
      res.json({
        status: 200,
        data: results,
      });
    } catch (error) {
      res.json({
        status: 502,
        message: {
          internal: error.message,
          user: "Failed retrive data",
        },
        errors: error.errors,
      });
    }
  };
  
  exports.deleteData = async (req, res) => {
    const { id } = req.body;
    try {
      var message = "";
      const delete_user = await Messengers.destroy({ where: { id } });
      if (delete_user) {
        message = "Successfully removed";
      } else {
        message = "Failed remove";
      }
      res.json({
        status: 200,
        message: message,
      });
    } catch (error) {
      res.json({
        status: 502,
        message: {
          internal: error.message,
          user: "Failed remove data",
        },
        errors: error.errors,
      });
    }
  };
