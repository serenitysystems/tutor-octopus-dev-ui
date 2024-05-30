const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: {
    image: {
      type: String, // Assuming you're storing the path or URL of the image
    },
    text: {
      type: String,
      required: true // Assuming the text of the question is required
    }
  },
  questionType:String,
  options: [String],
  correctOption: [String],
  marks:Number
  //   quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz', required:true }
});

const quizSchema = new mongoose.Schema({
  quizType:{type:String},
  passingCriteria:{type:Number},
  batch: String,
  date: { type: String },
  subject: String,
  description: String,
  questions: [questionSchema],
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "Educator_info" },
  time: { type: String, require: true },
  totalQuizTime: { type: String, require: true },
  result:[{
    name:{type:String},
    score:{type:Number},
    status:{type:String},
    reminder:{type:Boolean},
    id:{type:mongoose.Schema.Types.ObjectId, ref: "Student" },
    email:{type:String},
    batch:{type:String},
    totalMarks:{type:Number},
    percentage:{type:Number},
  }],
  submittedPeople:{type:[String]},
  fullMarks:{type:Number}

});

exports.Quiz = mongoose.model("Quiz", quizSchema);
