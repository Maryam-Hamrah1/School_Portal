// geting elements from Html
const form = document.querySelector(".form-box");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const gradeInput = document.getElementById("grade");

// making a div for runing javascript on it
const message = document.createElement("p");
form.appendChild(message);

form.addEventListener("submit", function(e){
    e.preventDefault();
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const grade = gradeInput.value;

    // making valid
    if( name ==="" || age ==="" || grade ===""){
        message.textContent = "Please fill all fields!";
        message.style.color = "red";
        return;
    }

    // object
    const student = {
        name: name,
        age: age,
        grade: grade
    };
 
    // welcom message
    message.textContent = `Welcome ${student.name} to Hamrah high School!`;
    message.style.color = "black";
 
    //summary
    let summary = document.getElementById("summary");
    
    if(!summary) {
        summary = document.createElement("div");
        summary.id = "summary";
        form.appendChild(summary);
    }

    summary.innerHTML = `
    <h3>Student Info:</h3>
    <p>Name: ${student.name}</p>
    <p>Age: ${student.age}</p>
    <p>Grade: ${student.grade}</p>
    `;
  
    // reset the form
    form.reset();
})