const {
    Users
} = require("../../models");

exports.createData = async (req, res) => {
    const payloadData = req.body;
    try {
        const results = await Users.create(payloadData);
        res.json({
            status: 200,
            data: results,
        });
    } catch (error) {
        res.json({
            status: 502,
            message: {
                internal: error.message,
                user: "Failed create a new data"
            },
            errors: error.errors
        });
    }
};

exports.GetAll = async (req,res) => {
    try {
        const results = await messagers.findAll();
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

exports.index = async (req, res) => {
    res.json({
        status: 200,
        message: "prefix for end-poin users",
    });
};