// questionAdd
const { Question } = require("../Models/Question");


exports.questionAdd=async (req ,res) => {
    // const user = await Educator_info.findOne({ email: req.body.email })
    try{
        let data={
            date:req.body.date,
            batch:req.body. batch,
            questions:req.body. questions,
            title:req.body.title,
            description:req.body.description,
            time:req.body.time,
            managedBy:req.body.managedBy,
        }
    
        let question=new Question(data);
        question=await question.save();
    
        return res.status(200).send({
            success:true,
            message:"Added question successfully",
        });

    }catch(err){
        res.status(500).send({
            success: false,
            message: "Error occurred while adding question",
            error: err.message
        });
    }
   

}