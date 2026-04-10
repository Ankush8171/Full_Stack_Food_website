import userModel from "../models/user.model.js";


const addToCart = async(req,res)=>{

    try{
        let userData = await userModel.findOne({_id:req.body.userId});
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]) {
            cartData[req.body.itemId] =1;
        }else{
            cartData[req.body.itemId] +=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,
            message:"Added to  Cart"}
        )
    }catch(err){
        console.log(err);
        res.json({success:false,
            message:"Error"
        })
    }

}

const removeFromCart = async(req,res)=>{
    try{
        let userData =  await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(cartData[req.body.item]>0){
            cartData[req.body.itemId] -= 1;
        }
         await userModel.findByIdAndUpdate(req.body.userId,{cartData});
         res.json({success:true,message:"removed from cart"});
    }catch(err){

        console.log(error);
        res.json({success:false,message:"error"});      
    }

}

const getCart = async (req, res) => {
  try {
    const userId = req.body.userId;

    if (!userId) {
      return res.json({
        success: false,
        message: "User not authorized"
      });
    }

    const userData = await userModel.findById(userId);

    if (!userData) {
      return res.json({
        success: false,
        message: "User not found"
      });
    }

    const cartData = userData.cartData || {};

    res.json({
      success: true,
      cartData
    });

  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      message: "Error while fetching cart"
    });
  }
};

export {addToCart,removeFromCart,getCart}