// geting elements from Html
const form = document.querySelector(".form-box");
const messageBox = document.getElementById("successMessage")
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const gradeInput = document.getElementById("grade");


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