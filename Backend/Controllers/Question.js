// questionAdd
const { Quiz } = require("../Models/Quiz");
const { Student } = require("../Models/Student");
const { options } = require("../Router/userRouter");
const stringSimilarity = require('string-similarity');

exports.questionAdd = async (req, res) => {
  // const user = await Educator_info.findOne({ email: req.body.email })
  try {
    let data = {
      date: req.body.date,
      batch: req.body.batch,
      questions: req.body.questions,
      title: req.body.title,
      description: req.body.description,
      time: req.body.time,
      managedBy: req.body.managedBy,
    };

    let question = new Question(data);
    question = await question.save();

    return res.status(200).send({
      success: true,
      message: "Added question successfully",
    });
  } catch (err) {
    res.status(500).send({
      success: false,
      message: "Error occurred while adding question",
      error: err.message,
    });
  }
};

//adding one question to be posted under a quiz, using the quiz and the user Id
exports.addQuestions = async (req, res) => {
  try {
    const { userId, questions, quizId } = req.body; // Assuming userId is sent in the request body
    // //console.log(userId);
    // Find the quiz by id and userId
    const quiz = await Quiz.findOne({ _id: quizId });
    // If quiz not found or userId doesn't match, return 404
    if (!quiz) {
      return res
        .status(404)
        .json({ message: "Quiz not found or unauthorized" });
    }

    for (let i = 0; i < questions.length; i++) {
      quiz.questions.push(questions[i]);
    }

    await quiz.save();
    // Delete the quiz
    return res.send({
      message: "Questions Saved successfully",
      data: quiz,
      success: true,
    });
  } catch (error) {
    //console.log(error);
    res.status(500).json({ message: error.message });
  }
};

exports.createQuiz = async (req, res) => {
  try {
    // Extract quiz details from the request body
    const {
      quizType,
      batch,
      date,
      subject,
      questions,
      description,
      userId,
      time,
      totalQuizTime,
      passingCriteria,
    } = req.body;
    //console.log(req.body);
    // Create a new quiz object

    const quiz = new Quiz({
      quizType,
      batch,
      date,
      subject,
      description,
      questions,
      userId,
      time,
      totalQuizTime,
      passingCriteria,
    });
    //console.log(quiz);


    // Save the quiz to the database
    const savedQuiz = await quiz.save();

    // Send a success response
    return res.status(201).json({
      success: true,
      data: savedQuiz,
      message: "Quiz created!! Added Questions to this Quiz",
    });
  } catch (error) {
    // Send an error response if something goes wrong
    res.status(500).json({
      error: error.message,
      success: false,
      message: "Internal server error",
    });
  }
};

exports.updateQuestions = async (req, res) => {
  try {
    const { quizId, ...updatedFields } = req.body; // Extract quiz ID and new questions from request body
    //console.log(req.body.quizId)
    // Update the questions array in the quiz document
    const updatedQuiz = await Quiz.findOneAndUpdate(
      { _id: quizId },
      { $set: updatedFields },
      { new: true, upsert: true } // Return the updated document
    );

    if (!updatedQuiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    res
      .status(200)
      .json({ message: "Questions updated successfully", data: updatedQuiz });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      success: false,
      message: "Internal server error",
    });
  }
};

exports.deleteQuiz = async (req, res) => {
  try {
    const quizId = req.body.quizId;
    const userId = req.body.userId; // Assuming userId is sent in the request body
    //console.log(userId);

    // Find the quiz by id and userId
    const quiz = await Quiz.findOne({ _id: quizId, userId: userId });

    // If quiz not found or userId doesn't match, return 404
    if (!quiz) {
      return res
        .status(404)
        .json({ success: false, message: "Quiz not found or unauthorized" });
    }

    // Delete the quiz
    await Quiz.findByIdAndDelete(quizId);
    res.json({ success: true, message: "Quiz deleted successfully" });
  } catch (error) {
    res.status(250).json({
      error: error.message,
      success: false,
      message: "No quiz to delete",
    });
  }
};

exports.deleteQuestion = async (req, res) => {
  try {
    const quizId = req.body.quizId;
    const questionId = req.body.questionId;

    //fetching the quiz
    const quiz = await Quiz.findOne({ _id: quizId, questions });
    if (!quiz) {
      return res
        .status(404)
        .json({ message: "Quiz not found or unauthorized" });
    }

    //searching for the question and fetching the question index
    //console.log(questionId);

    const index = quiz.questions.findIndex(
      (question) => question._id.toString() == questionId.toString()
    );
    //console.log(index);
    if (index == -1) {
      res.status(500).json({ message: "Question does not exist" });
    }

    //deleting the question
    quiz.questions.splice(index, 1);

    // Save the updated quiz
    await quiz.save();

    return res
      .status(200)
      .json({ data: quiz, message: "Question Deleted Successfully" });
  } catch (error) {
    return res.status(250).json({ message: error.message });
  }
};

//getting Quiz for Student and Teacher
exports.getAllQuiz = async (req, res) => {
  try {
    const { userId,role,quizType } = req.query;
    console.log(userId,"    ",role,".................",quizType)

    //BASED ON ROLE GET THE QUIZ FOR TEACHER OR STUDENT
    if (role === "Teacher") {
      const quizTeacher = await Quiz.find({ userId:userId,quizType:quizType});
      if (!quizTeacher) {
        return res
          .status(404)
          .json({ message: "Quiz not found or unauthorized" });
      }
      return res
        .status(200)
        .json({ data: quizTeacher, message: "Recived All Quiz Successfully" });
    } else if (role === "Student") {
      //STUDENT WILL SEND HIS ID
      //console.log(role);
      let student=await Student.findOne({_id:userId});
      
      const managedBy=student.managedBy;
      const batch=student.batch;
      

      let quizStudent = await Quiz.find({ userId: managedBy, batch: batch,quizType:quizType });
      console.log(quizStudent);
      let filterquizStudent=[];
      let attemptedIndex=[];


      for (let i = 0; i < quizStudent.length; i++) {
        if (quizStudent[i].submittedPeople.includes(student.email)) {
            filterquizStudent.push(quizStudent[i]);
            attemptedIndex.push(i);
        } else {
            filterquizStudent.push(quizStudent[i]);
        }
    }
    

      let totalMarks=0;
      filterquizStudent = filterquizStudent.map((quiz,i) => ({
        //I want to put a condition here
        _id: quiz._id,
        subject: quiz.subject,
        description: quiz.description,
        date: quiz.date,
        time: quiz.time,
        totalQuizTime: quiz.totalQuizTime,
        attempted:attemptedIndex.includes(i)?true:false,
        questions: quiz.questions.map((question) => ({
          totalMarks: totalMarks + question.marks,
          question: question.question,
          options: question.options,
          questionType: question.questionType,
          
          
        })),
      }));

      return res
        .status(200)
        .json({ data: filterquizStudent, message: "Recived All Quiz Successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//When student hit submit button to submit answers, this api is called
exports.submitQuiz = async (req, res) => {
  try {
    const { quizId, studentId, answers,questionTime } = req.body; // Extract quiz ID, student ID, and answers from request body

    // Retrieve the quiz document
    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    // Initialize score counter
    //NEED TO ADD A CONDITION HERE REGARDING QUIZ-TYPE

    let score = 0,totalMarks=0;

    // Compare submitted answers with correct options
    //console.log(quiz);
    if(quiz.quizType==='Quiz'){
      answers.forEach((answer, index) => {
        const correctOption = quiz.questions[index].correctOption;
        const type=quiz.questions[index].questionType;
        if(type==='T/F'){
          if(answer[0]===correctOption[0]){
            score+=quiz.questions[index].marks
          }
        }
        else {
          let count=0;
          for(let i=0;i<answer.length;i++){
            if(answer[i]!==correctOption[i]){
              count=1;
            }
          }
          if(count===0){
            score+=quiz.questions[index].marks
          }
        }
       
        totalMarks+=quiz.questions[index].marks;
      });
    }




    else if(quiz.quizType!='Quiz'){
      console.log(answers,"...............payload");
      const data = {
        statusData: {
          status: "",
          percentage: 0,
          min: "think",
        },
        score: { value: 0, totalMarks: 0 },
        accuracy: 0,
        speed: { value: 0, unit: "Que/Hour" },
        totalQuestions: { count: 0, answered:0, skipped:0, unanswered:0 },
        time:{},
         //totalTime: {
        //   minutes: 30,
        //   spent: "1 Min 06 Sec",
        //   correct: "16 Sec",
        //   wrong: "1 Min 19 Sec",
        //   other: "1 Min 25 Sec",
        // },
        scoredMarks: { earned: 0, negative: 0, total: 0 },
        answerReview:[]
      };
      let totalSeconds = 0;
      for (let key in questionTime) {
    const { minutes, seconds } = questionTime[key];
    totalSeconds += minutes * 60 + seconds;
      }
     data.speed.value=Math.round(totalSeconds/Object.keys(questionTime).length)
     data.speed.unit='sec/question'

     
      
      answers.forEach((answer, index) => {
        //if answer, then go ahead  , else unanswered++;
        
        let eachanswerReview={question:"",correctAnswer:[],yourAnswer:[],status:"",css:"",time:`${0}min ${0}sec`}
        //console.log(answer);
         const correctOption = quiz.questions[answer.questionIndex].correctOption;
         eachanswerReview.question=quiz.questions[answer.questionIndex].question.text
         eachanswerReview.correctAnswer=quiz.questions[answer.questionIndex].correctOption
         eachanswerReview.yourAnswer=answer.answer
         eachanswerReview.time= `${questionTime[index]?.minutes !== undefined ? questionTime[index].minutes : 0}min ${questionTime[index]?.seconds !== undefined ? questionTime[index].seconds : 0}sec`

         const type=quiz.questions[answer.questionIndex].questionType;

         if(type==='T/F' || type==='Fill' ){
           if(answer.answer[0]===correctOption[0]){
            data.score.value+=quiz.questions[index].marks
            data.totalQuestions.answered++;
            eachanswerReview.status="answered"
            eachanswerReview.css="table-success"
             
           }
           else{
             data.totalQuestions.unanswered++;
             eachanswerReview.status="unanswered"
             eachanswerReview.css="table-danger"
           }
         }
         else if(type==='objective' || type==='Arrange the following'){
          let count=0;
           for(let i=0;i<answer.answer.length;i++){
            if(answer.answer[i]!==correctOption[i]){
              count=1;
             }
           }
           if(count===0){
             data.score.value+=quiz.questions[index].marks
             data.totalQuestions.answered++;
             eachanswerReview.status="answered"
             eachanswerReview.css="table-success"
           }
           else{
            data.totalQuestions.unanswered++;
            eachanswerReview.status="unanswered"
            eachanswerReview.css="table-danger"
           }
         }
         
          //Ram is a good boy. ------------->No other boy is as good as ram
          else if (type === 'Short') {
            const similarity = stringSimilarity.compareTwoStrings(answer.answer.join(' '), correctOption.join(' '));
            //const threshold = {partialCorrect:0.5,fullCorrect:0.8,lessThanpartial}; // You can adjust this threshold based on your requirement
              
              data.score.value +=Math.round( quiz.questions[index].marks*similarity);
              data.totalQuestions.answered++;
              eachanswerReview.status = similarity>0.8?"answered":"partially-correct";
              eachanswerReview.css =  similarity>0.8?"table-success":"table-info";
            //  else {
            //   data.totalQuestions.unanswered++;
            //   eachanswerReview.status = "unanswered";
            //   eachanswerReview.css = "table-danger";
            // }
          }

           
         data.score.totalMarks+=quiz.questions[answer.questionIndex].marks;
         data.answerReview.push(eachanswerReview)
        
      });
       data.totalQuestions.skipped=quiz.questions.length-answers.length;
       //finding the record for skipped answers
       //[0,1,2]--->[3,4,5]
       let answeredIndexes = answers.map(answer => answer.questionIndex);
       console.log(answeredIndexes)
       let skippedRecords = quiz.questions.filter((question, index) => !answeredIndexes.includes(index));
       skippedRecords.map((record,index)=>{
        let eachanswerReview={
          question:record.question.text,
          correctAnswer:record.correctOption,
          yourAnswer:"skipped",
          status:"skipped",
          css:"table-warning",
          time: `${questionTime[index]?.minutes !== undefined ? questionTime[index].minutes : 0}min ${questionTime[index]?.seconds !== undefined ? questionTime[index].seconds : 0}sec`

        }
          data.answerReview.push(eachanswerReview)
          data.score.totalMarks+=record.marks
          data.time[index]=questionTime[index]?questionTime[index]:0

    })

       // console.log(skippedRecords)


       data.totalQuestions.count=quiz.questions.length
       data.accuracy=(data.totalQuestions.answered/(data.totalQuestions.answered+data.totalQuestions.unanswered))*100
      // // data.speed.value=answers.length/totalTime in secs
      console.log(data.score.value,".............",data.score.totalMarks)
       data.statusData.percentage=(data.score.value/data.score.totalMarks)*100
       data.statusData.status=data.statusData.percentage>40?"Pass":"Fail"
       data.statusData.min=40
      return res.status(200).send({
        data:data,
        success:true,
        message:"Recieved result successfully"
      })
//    for(let i=0;i<allanswers.length;i++){
//     let answerGiven=answers.find((answer)=>answer.questionIndex===i)
//     if(answerGiven){
//        if(answerGiven.type==='T/F'){
//           if (answerGiven.correctOption[0] === allanswers[0]) 
//             {
//                 data.score.value += quiz.questions[index].marks;
//                 data.totalQuestions.answered++;
//             } 
//           else 
//            {
//                   data.totalQuestions.unanswered++;
//            }
//     }
//     else if(answerGiven.type==='objective'){
//       if (answerGiven.correctOption[0] === allanswers[0]) 
//         {
//             data.score.value += quiz.questions[i].marks;
//             data.totalQuestions.answered++;
//         } 
//       else 
//        {
//               data.totalQuestions.unanswered++;
//        }
// }

//     }
//     else{
//       data.totalQuestions.skipped++;
//     }


//   }	
    }
    let percentage=(score/totalMarks)*100

    // Save student's score and quiz ID
    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
   
    
      const resultData={
        name:student.firstName+" "+student.lastName,
        score:score,
        status:percentage>quiz.passingCriteria?"pass":"fail",
        reminder:false,
        id:student._id,
        email:student.email,
        batch:student.batch,
        totalMarks:totalMarks,
        percentage:(score/totalMarks)*100,
      }
      // Update student's score and quiz ID
      quiz.result.push(resultData);
      quiz.submittedPeople.push(student.email)
      await quiz.save();
  
      res
        .status(200)
        .json({ message: "Answers submitted successfully", data: score,dataNew:{score:resultData.score,
          totalMarks:resultData.totalMarks,percentage:resultData.percentage} });

    
   
  } catch (error) {
    res.status(500).json({
      error: error.message,
      success: false,
      message: "Internal server error",
    });
  }
};


//Re-allow a student to take quiz
exports.removesubmitQuiz = async (req, res) => {
  try {
    console.log(req.body.email);
   // const 
   
    const {email,quizId} = req.body; 

    // Update the quiz document by pulling the specific result and submittedPeople entries
    await Quiz.findByIdAndUpdate(
      quizId,
      { $pull: { result: { email: email } } },
      { new: true }
    );
    const updatedQuiz=await Quiz.findByIdAndUpdate(
      quizId,
      { $pull: {submittedPeople:email} },
      { new: true }
    );

    // Pull the email from submittedPeople array
   
    if (!updatedQuiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    res.status(200).json({ 
      message: "Submitted quiz data removed successfully", 
      data: updatedQuiz.result,
      success:true });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      success: false,
      message: "Internal server error",
    });
  }
};








 //HOW TO FETCH DATA OF REMAINING STUDENTS?

exports.getQuizRecord = async (req, res) => {
  try {
    const { quizId, batch, managedBy } = req.query;

    //filtering the data based on batch in quizId
    const quiz=await Quiz.findById(quizId);
    //I want to find documents where quiz.result 
    if(!quiz){
      return res.send({
        message:"quiz not found"
      })
    }
    // quiz.result.filter(result =>result.batch === batch);
    const filteredResults =  quiz.result.filter(result=>result.batch===batch)
    console.log(filteredResults)
    //
    const filterStudent=await Student.find({batch:batch,managedBy:managedBy});
    const submitted=filteredResults.length-filterStudent.length;
   
    const totalScore = filteredResults.reduce((sum, result) => sum + result.score, 0);
    const averageScore = filteredResults.length > 0 ? totalScore / filteredResults.length : 0;

    const performance = {
      '90+': 0,
      '80-89': 0,
      '70-79': 0,
      '60-69': 0,
      '<60': 0
    };
    
    
    for (let i = 0; i < filteredResults.length; i++) {
      const score = filteredResults[i].percentage;
      if (score > 90) {
        performance['90+']++;
      } else if (score >= 80) {
        performance['80-89']++;
      } else if (score >= 70) {
        performance['70-79']++;
      } else if (score >= 60) {
        performance['60-69']++;
      } else {
        performance['<60']++;
      }
    }
    let allEmail=filteredResults.map((item)=>item.email);

    let studentRecord=[];


    //
    
   for(let i=0;i<filterStudent.length;i++){
    let count=0;
   
    for(let j=0;j<filteredResults.length;j++){
        if(filterStudent[i].email===filteredResults[j].email){
          studentRecord.push(filteredResults[j]);
          count=1;
        }
    }
      if(count==0)
        {
          studentRecord.push(
            {
             name: filterStudent[i].firstName,
             score: 0,
             status: "not appeared",
             totalMarks:0,
             percentage:0,
             reminder: true,
             id: filterStudent[i]._id,
             email: filterStudent[i].email,
             batch: filterStudent[i].batch
            }
           );
        }
      
    }

    return res.send({
      message:"fetched Data successfully",
      data:{
        student_performance:{
          submitted_by:filteredResults.length,
          total_students:filterStudent.length,
          averageScore:averageScore,
          performance:performance,
         
        },
        student_scores:studentRecord

      }
    })
   }  
    //console.log(performance);
   catch (error) {
    res.status(500).json({
      error: error.message,
      success: false,
      message: "Internal server error"
    });
  }
};



exports.getQuizRecordBatchList = async (req, res) => {
  try {
    const { batch, managedBy } = req.query;

    //filtering the data based on batch in quizId
    const quiz=await Quiz.find({managedBy:managedBy,batch:batch});
    //I want to find documents where quiz.result 
    if(!quiz){
      return res.send({
        message:"quiz not found"
      })
    }
    quiz = quiz.map((item) => ({
      subject: item.subject,
      description: item.description,
    }));
    
    console.log(quiz);
    return res.send({
      message:"fetched Data successfully",
      data:quiz
    })
   }  
    //console.log(performance);
   catch (error) {
    res.status(500).json({
      error: error.message,
      success: false,
      message: "Internal server error"
    });
  }
};



//Merit List of Students
exports.meritListQuiz = async (req, res) => {
  try {
    const { quizId } = req.body;

    // Find students who participated in the quiz and their scores
    const students = await Student.find({ "scores.quizId": quizId })
      .sort({ "scores.$[elem].marks": -1 })
      .limit(10);
    // Explanation of the above line:
    // - Find students where the scores array contains an object with quizId equal to the requested quizId.
    // - Sort the results based on the score for the specified quizId in descending order.
    // - Limit the results to 10 students for the merit list.

    // Prepare the response by extracting necessary information
    const meritList = students.map((student) => ({
      studentId: student._id,
      name: student.name,
      score: student.scores.find((score) => score.quizId === quizId).marks,
    }));

    res.status(200).json({ meritList });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      success: false,
      message: "Internal server error",
    });
  }
};

//getting AllActive Quiz for a Student
//Student-"batch" and "userId"
