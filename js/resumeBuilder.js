var name = "Anton Kilchik";
var role = "Web Developer";
var contact_info = {
  "mobile" : "+7(919)962-87-**",
  "email" : "anton.kilchik@gmail.com",
  "twitter" : "just_camel",
  "github" : "github.com/justcamel",
  "location" : "Russia, Moscow, Myachkovskiy bulvar"
};

skills = ["c++", "git", "linux", "python"];
var bio = {
  "name" : name,
  "role" : role,
  "contact info" : contact_info,
  "picture" : "images/me.jpg",
  "welcome message" : "Welcome to my resume!",
  "skills" : skills
};

var work = {
  "jobs": [
    {
      "title": "C++ programmer",
      "employer": "Mail.Ru Group",
      "dates": "october 2013 -",
      "location": "Moscow",
      "description": "Develop desktop client for Cloud@Mail.ru"
    }
  ]
};

var projects = [
    {
      "title": "Prediction of aircraft fuel consumption using neural networks",
      "dates": "january 2013 - june 2013",
      "description": "Research of predicting of aircraft fuel consumption using technics based on real-time neural networks",
    }
];

var education = {
  "schools": [ 
    {
      "name": "MSTU by Bauman",
      "years": "2007-2013",
      "city": "Mosow",
      "degree": "Masters",
      "major": ["CAD"]
    },
    {
      "name": "Lyceum 1524",
      "years": "2004-2007",
      "city": "Moscow",
      "degree": "BA",
      "major": ["Physics", "Mathematics"]
    }
  ],
  "online courses": [
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "years": "2014"
    }
  ]
};

education["years"] = "2007-2013";
education["city"] = "Moscow";


// Name and role
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedName);
$("#header").prepend(formattedRole);

// Contacts
var formattedMobile = HTMLmobile.replace("%data%", contact_info.mobile);
var formattedEmail = HTMLemail.replace("%data%", contact_info["email"]);
var formattedTwitter = HTMLtwitter.replace("%data%", contact_info["twitter"]);
var formattedGithub = HTMLgithub.replace("%data%", contact_info["github"]);
var formattedLocation = HTMLlocation.replace("%data%", contact_info.location);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedTwitter);
$("#header").append(formattedGithub);
$("#header").append(formattedLocation);

// Pic
var formattedPic = HTMLbioPic.replace("%data%", bio["picture"]);
$("#header").append(formattedPic);

// Welcome
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio["welcome message"]);
$("#header").append(formattedWelcome);

// Skills
if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  
  var formattedSkills = HTMLskills.replace("%data%", bio["skills"][0]);
  $("#header").append(formattedSkills);

  formattedSkills = HTMLskills.replace("%data%", bio["skills"][1]);
  $("#header").append(formattedSkills);

  formattedSkills = HTMLskills.replace("%data%", bio["skills"][2]);
  $("#header").append(formattedSkills);

  formattedSkills = HTMLskills.replace("%data%", bio["skills"][3]);
  $("#header").append(formattedSkills);
}

// Work experience
var formattedPosition = HTMLworkTitle.replace("%data%", work.jobs[0].title);
var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[0].employer);
var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[0].dates);
var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[0].location);
var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[0].description);
$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(formattedPosition);
$("#workExperience").append(formattedWorkEmployer);
$("#workExperience").append(formattedWorkDates);
$("#workExperience").append(formattedWorkLocation);
$("#workExperience").append(formattedWorkDescription);

// Projects
var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects[0].title);
var formattedProjectDates = HTMLprojectDates.replace("%data%", projects[0].dates);
var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects[0].description);
$("#projects").append(HTMLprojectStart);
$("#projects").append(formattedProjectTitle);
$("#projects").append(formattedProjectDates);
$("#projects").append(formattedProjectDescription);

// Education
var formattedSchoolName = HTMLschoolName.replace("%data%", education["schools"][0].name);
var formattedSchoolDates = HTMLschoolDates.replace("%data%", education["schools"][0].years);
var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education["schools"][0].city);
$("#education").append(HTMLschoolStart);
$("#education").append(formattedSchoolName);
$("#education").append(formattedSchoolDates);
$("#education").append(formattedSchoolLocation);
  
