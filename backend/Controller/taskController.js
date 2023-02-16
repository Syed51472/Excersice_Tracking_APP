const taskModel = require("../Model/taskModel");

exports.sayInsert = async (req, res, send) => {
  try {
    const { name, description, activity, duration, date } = req.body;
    const form = await taskModel({
      name,
      description,
      activity,
      duration,
      date,
    });
    await form.save();
    res.send(form);
  } catch (error) {
    res.send(console.log(error));
  }
};

exports.sayGet = async (req, res, send) => {
  let user = await taskModel
    .find()
    .then((used) => {
      res.send(used);
    })
    .catch((err) => {
      console.log("Api Error");
    });
};

exports.sayGetbyid = async (req, res, send) => {
  const post = await taskModel.findById(req.params.id);
  res.send(post);
};

exports.sayUpdate = async (req, res, send) => {
  const post = await taskModel.findByIdAndUpdate(req.params.id, {
    $set: req.body,
  });
  res.send(post);
};

exports.sayDelete = async (req, res, send) => {
  const post = await taskModel.findById(req.params.id);
  post.delete();
  res.send(post);
};
