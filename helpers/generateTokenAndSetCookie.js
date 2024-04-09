import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie = (userId,res) => {
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn: '15d',
    });
    res.cookie('jwt',token,{
        expires: new Date(Date.now() + 15*24*60*60*1000),
        httpOnly: true, 
        sameSite:"None",
    });

    return token;
}

export default generateTokenAndSetCookie;
