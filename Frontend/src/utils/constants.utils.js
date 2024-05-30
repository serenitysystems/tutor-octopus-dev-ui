const TUTOROPTIONS = [
  {
    name: "Home",
    image: "/img/home.png",
    route: "/Home",
  },
  {
    name: "Student",
    image: "/img/Student1.png",
    route: "/Student",
  },
  {
    name: "Attendance",
    image: "/img/Attendance.png",
    route: "/Attendance",
  },
  {
    name: "Calendar",
    image: "/img/Calendar.png",
    route: "/Event_Calendar",
  },
  {
    name: "Online Material",
    image: "/img/OnlineMaterial.png",
    route: "/OnlineResources",
  },
  {
    name: "Expenses & Revenue",
    image: "/img/Expenses.png",
    route: "/Expenses_Revenue",
  },
  {
    name: "Quiz",
    image: "/img/Quiz-1.png",
    route: "/Quiz",
  },
  {
    name: "Exam Features",
    image: "/img/ExamFeatures.png",
    route: "/ExamFeatures",
  },
  {
    name: "Announcements",
    image: "/img/Announcements.png",
    route: "/Announcements",
  },
  {
    name: "Website",
    image: "/img/Website.png",
    route: "/Website",
  },
  {
    name: "Business Report",
    image: "/img/BusinessReport.png",
    route: "/Business_Report",
  },
];

const STUDENTSIDEBAROPTIONS = [
  {
    name: "Today's Sessions",
    image: "/img/sessions.svg",
    route: "/student/today-sessions",
  },
  {
    name: "Fee Transactions",
    image: "/img/fee.svg",
    route: "/student/fee-transactions",
  },
  {
    name: "Timetable",
    image: "/img/calendar.png",
    route: "/student/timetable",
  },
  {
    name: "Attendance",
    image: "/img/student-attendance.svg",
    route: "/student/student-attendance",
  },
  {
    name: "Exam",
    image: "/img/assignment.svg",
    route: "/student/student-exam",
  },
  {
    name: "Quiz",
    image: "/img/Quiz-1.png",
    route: "/student/student-quiz",
  },
  {
    name: "Announcement",
    image: "/img/Announcements.png",
    route: "/student/student-announcement",
    // route: "#",
  },
  {
    name: "Subscription",
    image: "/img/subscription.svg",
    route: "/student/subscription",
  },
  {
    name: "Logout",
    image: "/img/Logout.png",
    route: "/student/Login_role",
  },
];

const DUMMYQUIZRESULTS = {
  student_performance: {
    submitted_by: 75,
    total_students: 80,
    average_percentage: "70%",
    performance: [
      {
        percentage_below: "100%",
        percentage_above: "90%",
        students: 4,
      },
      {
        percentage_below: "89%",
        percentage_above: "70%",
        students: 10,
      },
      {
        percentage_below: "69%",
        percentage_above: "60%",
        students: 20,
      },
      {
        percentage_below: "59%",
        percentage_above: "50%",
        students: 15,
      },
      {
        percentage_below: "49%",
        percentage_above: "40%",
        students: 8,
      },
      {
        percentage_below: "39%",
        percentage_above: "30%",
        students: 6,
      },
      {
        percentage_below: "29%",
        percentage_above: "20%",
        students: 5,
      },
      {
        percentage_below: "19%",
        percentage_above: "10%",
        students: 2,
      },
      {
        percentage_below: "9%",
        percentage_above: "0%",
        students: 1,
      },
    ],
  },
  student_scores: [
    {
      name: "Anju Srivastava",
      score: 0,
      passMarks: 40,
      status: "not defined",
      reminder: true,
    },
    {
      name: "parmendar kaur",
      score: 0,
      passMarks: 40,
      status: "not defined",
      reminder: true,
    },
    {
      name: "parmendar kaur",
      score: 0,
      passMarks: 40,
      status: "not defined",
      reminder: true,
    },
    {
      name: "mohit rai",
      score: 0,
      passMarks: 40,
      status: "not defined",
      reminder: true,
    },
    {
      name: "Ronit Malhotra",
      score: 0,
      passMarks: 40,
      status: "not defined",
      reminder: true,
    },
    {
      name: "qwer pathak",
      score: 0,
      passMarks: 40,
      status: "not defined",
      reminder: true,
    },
    {
      name: "naina rai",
      score: 0,
      passMarks: 40,
      status: "not defined",
      reminder: true,
    },
    {
      name: "mohit rai",
      score: 0,
      passMarks: 40,
      status: "not defined",
      reminder: true,
    },
    {
      name: "mohit rai",
      score: 0,
      passMarks: 40,
      status: "not defined",
      reminder: true,
    },
    {
      name: "Test Test",
      score: 0,
      passMarks: 40,
      status: "not defined",
      reminder: true,
    },
    {
      name: "Anshuman paul",
      score: 0,
      passMarks: 40,
      status: "not defined",
      reminder: true,
    },
    {
      name: "John Doe",
      score: 0,
      passMarks: 40,
      status: "not defined",
      reminder: true,
    },
    {
      name: "pankaj soni",
      score: 0,
      passMarks: 40,
      status: "not defined",
      reminder: true,
    },
    {
      name: "John Doe",
      score: 0,
      passMarks: 40,
      status: "not defined",
      reminder: true,
    },
    {
      name: "Anshuman kaur",
      score: 0,
      passMarks: 40,
      status: "not defined",
      reminder: true,
    },
    {
      name: "John cena",
      score: 0,
      passMarks: 40,
      status: "not defined",
      reminder: true,
    },
    {
      name: "Olive Johnson",
      score: 0,
      passMarks: 40,
      status: "not defined",
      reminder: true,
    },
    {
      name: "Olive Johnson",
      score: 0,
      passMarks: 40,
      status: "not defined",
      reminder: true,
    },
  ],
};

export { TUTOROPTIONS, STUDENTSIDEBAROPTIONS, DUMMYQUIZRESULTS };
