const User = require('../schemas/User');
const jwt = require('jsonwebtoken');


const createToken = (id, email) => {
    return jwt.sign({ id, email }, process.env.SECRET, {expiresIn: '1d'});

};

//login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = await User.login(email, password);

        const token = createToken(user._id, user.email);

        res.status(200).json({ email, token })
        
    } catch (error) {
        res.status(400).json({error: error.message});
    };
};

//signup user
const signupUser = async (req, res) =>{
    const { email, password } = req.body;
    
    try {
        const user = await User.signup(email, password);

        const token = createToken(user._id, user.email);

        res.status(200).json({ email, token })
        

    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = { loginUser, signupUser };
