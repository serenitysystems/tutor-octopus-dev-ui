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



exports.quizDetails=async (req, res) => {
    try {
      // Extract quiz details from the request body
      const { name, batch, date, subject, description, userId } = req.body;
  
      // Create a new quiz object
      const quiz = new Quiz({
        name,
        batch,
        date,
        subject,
        description,
        questions,
        userId
      });
  
      // Save the quiz to the database
      const savedQuiz = await quiz.save();
  
      // Send a success response
      res.status(201).json({
          success:true,
          data:savedQuiz,
          message:"Quiz created!! Add Questions to this Quiz"
      });
    } catch (error) {
      // Send an error response if something goes wrong
      res.status(500).json({ error: error.message });
    }
}