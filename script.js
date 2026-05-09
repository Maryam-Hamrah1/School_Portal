//Home page
// geting elements from Html
const form = document.querySelector(".form-box");
const messageBox = document.getElementById("successMessage")
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const gradeInput = document.getElementById("grade");


if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();
        const name = nameInput.value.trim();
        const age = ageInput.value.trim();
        const grade = gradeInput.value;

        // making valid
        if( name ==="" || age ==="" || grade ===""){
            alert("Please fill all fields!");
            return;
        }

        // object
        const student = {
            name: name,
            age: age,
            grade: grade
        };

        //hide form
        form.style.display = "none";

        //show message instead
        messageBox.style.display = "block";
        messageBox.innerHTML = `
            <h1>🎉 Welcome ${student.name} !</h1>
            <p>You are successfully enrolled in Hamrah High School.</p>

        <div class="summary">
            <h3>Your Information: </h3>
            <p><strong>Name: </strong> ${student.name}</p>
            <p><strong>Age: </strong> ${student.age}</p>
            <p><strong>Grade: </strong> ${student.grade}</p>
        </div>
        `;
    
        // reset the form
        form.reset();
    })

}



// profile

// buttons
const emailBtn = document.getElementById("showEmail");
const phoneBtn = document.getElementById("showPhone");
const hideBtn = document.getElementById("hideInfo");

// contact area
const contactInfo = document.getElementById("contactInfo");

// status
const updateBtn = document.getElementById("updateBtn");
const statusInput = document.getElementById("statusInput");
const statusText = document.getElementById("status");

// show email
if(emailBtn && phoneBtn && hideBtn){
    emailBtn.addEventListener("click", function () {

    contactInfo.innerHTML = `
        <p>Email: student@hamrahschool.com</p>
        `;

    });

    // show phone
    phoneBtn.addEventListener("click", function () {

        contactInfo.innerHTML = `
        <p>Phone: +93 700 000 000</p>
        `;

    });

    // hide info
    hideBtn.addEventListener("click", function () {

        contactInfo.innerHTML = `
        <p>Contact information hidden.</p>
        `;

    });

    // update status
    updateBtn.addEventListener("click", function () {

        const newStatus = statusInput.value.trim();

        if (newStatus === "") {
        alert("Please enter a status!");
        return;
    }

    statusText.textContent = newStatus;

    statusInput.value = "";

    });

}

// course page
const coursesContainer = document.getElementById("coursesContainer");

if (coursesContainer) {

  // ARRAY OF OBJECTS

  const courses = [

    {
      name: "Mathematics",
      instructor: "Mr. Ahmad",
      grade: "10",
      description: "Learn algebra and geometry.",
      image: "math.jpg"
    },

    {
      name: "Physics",
      instructor: "Ms. Sara",
      grade: "11",
      description: "Study motion and energy.",
      image: "physics.jpg"
    },

    {
      name: "Computer Science",
      instructor: "Mr. Karim",
      grade: "12",
      description: "Introduction to programming.",
      image: "computer.jpg"
    }

  ];

  // RENDER FUNCTION

    function renderCourses(courseList) {

       coursesContainer.innerHTML = "";

        courseList.forEach(function(course) {

            coursesContainer.innerHTML += `

            <div class="course-card">

                <img src="${course.image}" alt="${course.name}">

            <div class="course-content">

            <h3>${course.name}</h3>

            <p>${course.instructor}</p>

            <p>Grade ${course.grade}</p>

            <button
              class="detailsBtn"

              data-name="${course.name}"

              data-instructor="${course.instructor}"

              data-grade="${course.grade}"

              data-description="${course.description}"
            >
              View Course Details
            </button>

          </div>

          </div>
         `;

        });

       // DATASET

      const detailButtons =
      document.querySelectorAll(".detailsBtn");

      const details =
      document.getElementById("courseDetails");

      detailButtons.forEach(function(btn) {

      btn.addEventListener("click", function() {

        details.innerHTML =` 

          <h3>${this.dataset.name}</h3>

          <p><strong>Instructor:</strong>
          ${this.dataset.instructor}</p>

          <p><strong>Grade:</strong>
          ${this.dataset.grade}</p>

          <p>${this.dataset.description}</p>

        `;

      });

      });

    };

  // INITIAL RENDER

  renderCourses(courses);

  // FILTER

  const gradeFilter =
    document.getElementById("gradeFilter");

  gradeFilter.addEventListener("change", function() {

    const value = this.value;

    if (value === "all") {

      renderCourses(courses);

    } else {

      const filtered =
        courses.filter(function(course) {

          return course.grade === value;

        });

      renderCourses(filtered);

    }

  });

  // ADD COURSE

  const courseForm =
    document.getElementById("courseForm");

  courseForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const courseName =
      document.getElementById("courseName").value;

    const instructor =
      document.getElementById("instructor").value;

    const grade =
      document.getElementById("courseGrade").value;

    const description =
      document.getElementById("description").value;

    const image =
      document.getElementById("image").value;

    // VALIDATION

    if (
      courseName === "" ||
      instructor === "" ||
      grade === "" ||
      description === "" ||
      image === ""
    ) {

      alert("Please fill all fields!");

      return;

    }

    // NEW OBJECT

    const newCourse = {

      name: courseName,
      instructor: instructor,
      grade: grade,
      description: description,
      image: image

    };

    // PUSH

    courses.push(newCourse);

    // RE-RENDER

    renderCourses(courses);

    // RESET

    courseForm.reset();

  });

}



// CONTACT PAGE

const contactForm =
document.getElementById("contactForm");

if (contactForm) {

  const contactSuccess =
    document.getElementById("contactSuccess");

  contactForm.addEventListener("submit", function(e) {

    e.preventDefault();

    // GET VALUES

    const name =
      document.getElementById("contactName")
      .value.trim();

    const email =
      document.getElementById("contactEmail")
      .value.trim();

    const message =
      document.getElementById("contactMessage")
      .value.trim();

    // VALIDATION

    if (
      name === "" ||
      email === "" ||
      message === ""
    ) {

      alert("Please fill all fields!");

      return;

    }

    // SUCCESS MESSAGE

    contactSuccess.innerHTML = `

      <h2>✅ Message Sent Successfully!</h2>

      <p>
        Thank you ${name}.
        We will contact you soon.
      </p>

    `;

    // HIDE FORM

    contactForm.style.display = "none";

    // RESET FORM

    contactForm.reset();

  });

}