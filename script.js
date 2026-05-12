
// index
const form = document.querySelector(".form-box");
const messageBox = document.getElementById("successMessage");
const alert = document.getElementById("alertMessage");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const gradeInput = document.getElementById("grade");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const grade = gradeInput.value;

    if (name === "" || age === "" || grade === "") {
      alert.textContent = "please fill all fields!";
      return;
    }

    const student = {
      name: name,
      age: age,
      grade: grade,
    };

    form.style.display = "none";
    messageBox.style.display = "block";

    const h1 = document.createElement("h1");
    h1.textContent = `🎉 Welcome  ${student.name} !`;

    const p = document.createElement("p");
    p.textContent = "You are successfully enrolled in Hamrah High School.";

    messageBox.appendChild(h1);
    messageBox.appendChild(p);
    
    const div = document.createElement("div")
    messageBox.appendChild(div)

    const boldName = document.createElement("strong")
    boldName.textContent= " Name: "

    const boldAge = document.createElement("strong")
    boldAge.textContent= " Age: "

    const boldGrage = document.createElement("strong")
    boldGrage.textContent= " Grade: "
    
    const p1 = document.createElement("p")
    const p2 = document.createElement("p")
    const p3 = document.createElement("p")

    p1.append(boldName, name);
    p2.append(boldAge, age);
    p3.append(boldGrage, grade);

    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(p3)

    form.reset();
  });
} 


// profile page

const profileCard = document.querySelector(".profile-card")

const emailBtn = document.getElementById("showEmail")
const phoneBtn = document.getElementById("showPhone")
const hideBtn = document.getElementById("hideInfo")

const contactInfo = document.getElementById("contactInfo")

const updateBtn = document.getElementById("updateBtn")
const statusInput = document.getElementById("statusInput")
const statusText = document.getElementById("status")
const statusError = document.getElementById("statusError")

if(profileCard){
    emailBtn.addEventListener("click", function(){
        contactInfo.textContent = "Email: student@hamrahschool.com"
    });

    phoneBtn.addEventListener("click", function(){
        contactInfo.textContent = "Phone: +93 700 000 000"
    });

    hideBtn.addEventListener("click", function(){
        contactInfo.textContent = ""
    });

    updateBtn.addEventListener("click", function(){
        const newStatuse = statusInput.value.trim();
        
        if(newStatuse === ""){
            statusError.textContent = " Please enter a status!"
            statusError.style.color = "red"
        };
        
        statusText.textContent = newStatuse;

        statusInput.value = " ";
    });
}


// Course page

const courseContainer = document.getElementById("coursesContainer");

if (courseContainer) {
  const Courses = [
    {
      name: "Mathematics",
      instructor: "Mr. Ahmad",
      grade: "10",
      description: "Learn algebra and geometry.",
      image: "math.jpg",
    },

    {
      name: "Physics",
      instructor: "Ms. Sara",
      grade: "11",
      description: "Study motion and energy.",
      image: "physics.jpg",
    },

    {
      name: "Computer Science",
      instructor: "Mr. Karim",
      grade: "12",
      description: "Introduction to programming.",
      image: "computer.jpg",
    },
  ];

  function renderCourses(courseList) {
    courseContainer.innerHTML = "";

    courseList.forEach(function (course) {
      courseContainer.innerHTML += `
        <div class="course-card">

            <img src="${course.image}" alt="${course.name}">

            <div class="course-content">

                <h1>${course.name}</h1>
                <p>${course.instructor}</p>
                <p>${course.grade}</p>

                <button class="detailsBtn"
                    data-name="${course.name}"
                    data-instructor="${course.instructor}"
                    data-grade = "${course.grade}"
                    data-description= "${course.description}">
                    Course Details
                    </button>
            </div>
        </div>
        `;  
    });



    const detailButtons= document.querySelectorAll(".detailsBtn")
    const Details = document.getElementById("courseDetails")

    detailButtons.forEach(function (btn){
        btn.addEventListener("click" , function(){
            
            Details.innerHTML=` 

          <h3>${this.dataset.name}</h3>

          <p><strong>Instructor:</strong>
          ${this.dataset.instructor}</p>

          <p><strong>Grade:</strong>
          ${this.dataset.grade}</p>

          <p>${this.dataset.description}</p>

        `;
        });
    });
  }


  renderCourses(Courses);


  const gradeFilter = document.getElementById("gradeFilter");

  gradeFilter.addEventListener("change", function (){
    const value = this.value;

    if(value === "all") {
        renderCourses(Courses);
    } else{
        const filtered = Courses.filter(function (course){
            return course.grade === value;
        });
        
        renderCourses(filtered);
    };
  });
   
  const courseForm = document.getElementById("courseForm");

  courseForm.addEventListener("submit", function(e){
    e.preventDefault();

    const courseName = document.getElementById("courseName").value;
    const instructor = document.getElementById("instructor").value;
    const courseGrade = document.getElementById("courseGrade").value;
    const description = document.getElementById("description").value;
    const image = document.getElementById("image").value;
     
    const formError = document.querySelector(".formError")
    if(courseName==="" || instructor==="" || courseGrade==="" || description==="" || image===""){ 
      formError.textContent = "Please fill all fields!"
      return;   
    }
    formError.style.display = "none"

    const newCourse = {
      name: courseName,
      instructor: instructor,
      grade: courseGrade,
      description: description,
      image: image,
    };

    Courses.push(newCourse);

    renderCourses(Courses);

    courseForm.reset();

  });
}


//Contact page

const contactForm = document.getElementById("contactForm");

if(contactForm){
    const contactSuccess = document.getElementById("contactSuccess");

    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const Name = document.getElementById("contactName").value.trim();
        const Email = document.getElementById("contactEmail").value.trim();
        const message = document.getElementById("contactMessage").value.trim();



        const contactError = document.querySelector(".contactError")
        if(Name ==="" || Email==="" || message===""){
            contactError.textContent = "Please fill all fields!"
            return;
        } 
        contactError.style.display = "none";

        contactSuccess.innerHTML = `

            <h2>✅ Message Sent Successfully!</h2>

            <p>
                Thank you ${Name}, we will contact you soon.
            </p>

        `;

        contactForm.style.display = "none";

        contactForm.reset();
  });

};
