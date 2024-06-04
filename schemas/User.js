const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//creating a custom static ,method
userSchema.statics.signup = async function (name, email, password) {
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already in use");
  }
  if (!email || !password || !name) {
    throw Error("Please fill all fields");
  }

  if (!validator.isEmail(email)) {
    throw Error("Invalid Email");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error(
      `Be at least 8 characters long, Contain at least one uppercase letter, Contain at least one lowercase letter, Contain at least one number, Contain at least one special character (from the list !@#$%^&*(),.?":{}|<>)`
    );
  }

  const salt = await bcrypt.genSalt(15);

  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({name, email, password: hash });

  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("Please fill all fields");
  };
  
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Invalid Email");
};

const match = await bcrypt.compare(password, user.password)
if (!match) {
    throw Error(" Invalid Password");
};

return user;


};

module.exports = mongoose.model("User", userSchema);
