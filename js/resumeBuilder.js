
// INITIALIZING JSON DATA


// Biographic data
var bio = {
  "name": "Georg Obermayr",
  "role": "Crossmedia Specialist",
  "contacts": {
    "mobile": "0049 152 5312226",
    "email": "info@georgobermayr.de",
    "github": "georgobermayr",
    "twitter": "georgobermayr",
    "location": "Jetzendorf, Germany",
  },
  "welcomeMessage": "Welcome to my online resume",
  "skills": [
    "Content Strategy", "UX Design", "Frontend Development", "Content Engineering", "Crossmedia Production"
  ],
  "biopic": "images/Georg Obermayr-2013_Web.jpg"
};

// Education data
var education = {
  "schools": [
    {
      "name": "Secondary School",
      "location": "Pfaffenhofen, Germany",
      "degree": "High school",
      "majors": [
        "CS"
      ],
      "dates": 2002,
      "url": "http://www.rspaf.de"
    }
  ],
  "onlineCourses": [
    {
      "title": "Intro to HTML and CSS",
      "school": "Udacity",
      "dates": 2015,
      "url": "http://www.udacity.com"
    },
    {
      "title": "Various JavaScript, HMTL and CSS courses",
      "school": "Codeschool",
      "dates": 2014,
      "url": "http://www.codeschool.com"
    }
  ]
};

// Work Information
var work = {
  "jobs": [
    {
      "employer": "ADVERMA GmbH",
      "title": "Head of Crossmedia Production",
      "location": "Rohrbach, Germany",
      "dates": "2002/09 – today",
      "description": "As Head of Crossmedia Production I'm responsible for designing und implementing great user experiences spanning analog and digital media. My role involves hands-on implementation, client consulting as well as leading the team. "
    },
    {
      "employer": "Self-employed",
      "title": "Freelance author and speaker",
      "location": "Jetzendorf, Germany",
      "dates": "2005/08 – today",
      "description": "I've written for almost all German-speaking trade magazins about topics like Design, devolpement and technology in the publishing area. I'm also a frequent speaker at conferences and co-autored the Book 'Agile Publishing'."
    }
  ]
};

// Project data
var projects = {
  "projects": [
    {
      "title": "MTU Tablet App",
      "dates": "2014/01 – 2014/04",
      "description": "Implementing a tablet magazin application for a German turbine manufacturer. Avialable for iOS, Android and Kindle fire",
      "images": [
        "images/MTU-App_Titel.jpg", "images/MTU-App_Artikel-iPad.jpg", "images/MTU-App-Android.jpg"
      ]
    },
    {
      "title": "DESI PAK App",
      "dates": "2013/08 – 2013/11",
      "description": "Designing and implementing a calculator app for a manufacturer of desicants.",
      "images": [
        "images/Clariant_App-Rechner.jpg", "images/Clariant_App-Rechner-2.jpg", "images/Clariant_App_Landkarte.jpg"
      ]
    }
  ]
};


// OUTPUT OF JSON DATA


// Output Biography
bio.display = function() {

  // Output role before name to have right prepend-order
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);

  // Output name
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  // Using the generic snippet to easier deal with changing contacts in source data
  for (contact in bio.contacts){
    var thisContact = HTMLcontactGeneric.replace("%contact%", contact);
    var thisContact = thisContact.replace("%data%", bio.contacts[contact]);
    $("#topContacts").append(thisContact);
    $("#footerContacts").append(thisContact);
  }

  // Output picture
  var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedPic);

  // Output welcome mesage
  var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcomeMessage);

  // Iterating through skills and output them, first check if there are even skills available
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for(skill in bio.skills){
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
      $("#skills:last").append(formattedSkill);
    }
  };
}

bio.display();


// Output Work data

work.display = function () {
  // Loop through each job
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

    // Concat Title and Employer before outputing
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedEmployerAndTitle = formattedEmployer + " " + formattedTitle;
    $(".work-entry:last").append(formattedEmployerAndTitle);

    // Output Location
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);

    // Output Working dates
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    // Output job description
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  };
}

work.display();


// Output Project data

projects.display = function() {
  // Loop through each project
  for (project in projects.projects){
    $("#projects").append(HTMLprojectStart);

    // Output project title
    var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title)
    $(".project-entry:last").append(projectTitle);

    // Output project dates
    var projectdates = HTMLprojectDates.replace("%data%", projects.projects[project].dates)
    $(".project-entry:last").append(projectdates);

    // Output project description
    var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description)
    $(".project-entry:last").append(projectDescription);

    // Looping through each image in this project and output them
    for (image in projects.projects[project].images){
      var projectImages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
      $(".project-entry:last").append(projectImages);
    }

  }
}

projects.display();


// Output education data

education.display = function() {
  // First the schools
  for (school in education.schools) {

    $("#education").append(HTMLschoolStart);

    // Get name and degree, concat them and output
    var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
    var formattedName = formattedName.replace("#", education.schools[school].url);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    var formattedNameAndDegree = formattedName + formattedDegree;
    $(".education-entry:last").append(formattedNameAndDegree);

    // Output dates
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);

    // Output location
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);

    // Loop through and output majors
    for (major in education.schools[school].majors) {
      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
      $(".education-entry:last").append(formattedMajor);
    }
  };

  // Insert header for Online Courses
  $("#education").append(HTMLonlineClasses);
  $("#education").append(HTMLschoolStart);

  //Output online courses
  for (onlineCourse in education.onlineCourses) {

    // Get name and degree, concat them and output
    var formattedName = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
    var formattedName = formattedName.replace("#", education.onlineCourses[onlineCourse].url);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
    var formattedNameAndSchool = formattedName + formattedSchool;
    $(".education-entry:last").append(formattedNameAndSchool);

    // Output dates
    var formmattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates);
    $(".education-entry:last").append(formmattedDates);

    // Output online school URL
    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
    $(".education-entry:last").append(formattedURL);
  }
}

education.display();



// NOT IN USE:
// Internationalize Function for name

// $("#main").append(internationalizeButton);

// function inName () {
//   var nameArray = name.split(" ");
//   var firstname = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
//   var surname = nameArray[1].toUpperCase();

//   var internationalName = firstname + " " + surname;

//   return internationalName;
// }



$("#mapDiv").append(googleMap);
