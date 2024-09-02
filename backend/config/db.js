const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/stackoverflow"
module.exports.connect = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
       useFindAndModify: false,
      useUnifiedTopology: true,
       useCreateIndex: true,
    })
    .then(() => console.log("MongoDB is connected successfully"))
    .catch((err) => console.log("Error: ", err));
};

