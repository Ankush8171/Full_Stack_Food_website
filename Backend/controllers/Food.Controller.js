import foodModel from "../models/food.model.js";
import fs from "fs"


// add food item
const addFood = async(req,res)=>{

    // console.log("BODY:", req.body);
    // console.log("FILE:", req.file);

     if (!req.file) {
            return res.status(400).json({ message: "Image is required" });
        }

    let image_filename =`${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename,
    })

    try{
        await food.save();
        res.json({
            success:true,
            message:"Food Added"
        })
    }catch(err){

        console.log(err)
        res.json({
            success:false,
            message:"Error"
        })

    }
}


//all list food
const listfood = async (req,res)=>{
    try{
        const foods = await foodModel.find({});
        res.json({
            success:true,
            data:foods 
        })

        
    }catch(err){
        console.log(err);
        res.json({
            success:true,
            message:"Error"
        })

    }

}

//remove food item
const removefood = async (req, res) => {
    try {

        const food = await foodModel.findById(req.body.id);

        if (!food) {
            return res.status(404).json({
                success: false,
                message: "Food not found"
            });
        }

        // Delete image from uploads folder
        fs.unlink(`uploads/${food.image}`, (err) => {
            if (err) {
                console.log("Image delete error:", err.message);
            }
        });

        await foodModel.findByIdAndDelete(req.body.id);

        res.json({
            success: true,
            message: "Food removed successfully"
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Error deleting food"
        });
    }
};
    


export {addFood,listfood,removefood}