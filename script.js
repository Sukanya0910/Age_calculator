document.getElementById("calculator-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Retrieve date of birth input
    var birthdate = new Date(document.getElementById("birthdate").value);

    // Calculate age
    var age = calculateAge(birthdate);

    // Display the age
    document.getElementById("age").value = age;
});

function calculateAge(birthdate) {
    var today = new Date();
    var age = today.getFullYear() - birthdate.getFullYear();

    // Check if birthday has occurred this year
    var monthDiff = today.getMonth() - birthdate.getMonth();
    var dayDiff = today.getDate() - birthdate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}