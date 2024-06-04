const Image = require("../schemas/Image");

const getImages = async (req, res) => {
  try {
    let images = await Image.find();
    return res.status(200).json({ images });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};

const uploadImage = async (req, res) => {
  try {
    if (req.file && req.file.path) {
      const image = new Image({
        description: req.body.desc,
        url: req.file.path,
      });
      await image.save();
      return res.status(200).json({ msg: "image successfully saved" });
    } else {
      console.log(req.file);
      return res.status(422).json({ error: "invalid" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error });
  }
};
module.exports = {
  getImages,
  uploadImage,
};
