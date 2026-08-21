var form = document.getElementById("form");
var list = document.getElementById("list");

form.addEventListener("submit", function(event) {

    event.preventDefault();
    //GET VALUES FROM FORM
    //NAME VALUES   
    var lastName = document.getElementById("lastName").value;
    var firstName = document.getElementById("firstName").value;
    var middleName = document.getElementById("middleName").value;
    var fullName = lastName + ", " + firstName + " " + middleName;
    

    //DATE RELATED VALUES
    var month = document.getElementById("month").value;
    var date = document.getElementById("date").value;
    var dateOfBirth = month + " " + date;
    

    //CONTACT RELATED VALUES
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    
    //STUDENT ID / PROGRAM / SECTION VALUES
    var studentId = document.getElementById("studentId").value;
    var program = document.getElementById("program").value;
    var section = document.getElementById("section").value;
    
    //GUARDIAN PHONE VALUE TO CHECK FOR LATER
    var guardianPhone = document.getElementById("guardianPhone").value;


    /*IF FORM IS NOT FILL OUT COMPLETELY
     CREATE ALERT FOR USER CLARITY*/
    if (
        lastName === "" ||
        firstName === "" ||
        email === "" ||
        phone === "" ||
        program === "" ||
        section === ""
    ) {
        alert("Please fill out all required fields.");
        return;
    }

    //CHECK PHONE NUMBER LENGTH, MUST CONTAIN 11 DIGITS
    if (phone.length !== 11) {
        alert("Contact Number must contain exactly 11 digits.");
        return;
    }

    if(guardianPhone.length !== 11) {
        alert("Guardian Contact Number must contain exactly 11 digits.");
        return;
    }


    //CREATE NEW ROW
    var row = document.createElement("tr");


    // CREATE ROW CELLS FOR STUDENT INFORMATION
    var nameCell = document.createElement("td");
    nameCell.textContent = fullName;

    var emailCell = document.createElement("td");
    emailCell.textContent = email;
    
    var programCell = document.createElement("td");
    programCell.textContent = program + " / " + section;

    var phoneCell = document.createElement("td");
    phoneCell.textContent = phone;

    var addressCell = document.createElement("td");
    addressCell.textContent = address;

    var studentIdCell = document.createElement("td");
    studentIdCell.textContent = studentId;

    var dateOfBirthCell = document.createElement("td");
    dateOfBirthCell.textContent = dateOfBirth;




    // PUT CREATED CELLS INSIDE ROW
    row.appendChild(nameCell);
    row.appendChild(emailCell);
    row.appendChild(programCell);
    row.appendChild(phoneCell);
    row.appendChild(addressCell);
    row.appendChild(studentIdCell);
    row.appendChild(dateOfBirthCell);

    //PUT ROW IN STUDENT LIST TABLE
    list.appendChild(row);


    /*ALERT USER THAT STUDENT HAS BEEN ADDED
      AT END OF FORM*/    
    alert("Student successfully added to the list!");


    //RESET FORM TO USE AGAIN
    form.reset();
});