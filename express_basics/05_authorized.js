//used in middleware
const authorized = (req, res, next)=>{
    const {user} = req.query;
    if(user==='abhishek'){
        req.user = {name : 'abhishek', id : 1919}; //adding property to req object
        console.log('authorized');
        next();    //move to next functionality
    }
    else{
        console.log('unauthorized');
        res.send('unauthorized');  //if not means don't move to next functionality
    }
}

module.exports = authorized;