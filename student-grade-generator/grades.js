function calculateGrade() {
    let marks = document.getElementById("marks").value;
    marks = Number(marks);

    if (marks >= 0 && marks <= 100) {
      let grade;
      if (marks > 79) {
        grade = "A";
      } else if (marks >= 60) {
        grade = "B";
      } else if (marks >= 49) {
        grade = "C";
      } else if (marks >= 40) {
        grade = "D";
      } else {
        grade = "E";
      }
      document.getElementById("result").innerHTML = `The student scored grade ${grade}.`;
    } else {
      document.getElementById("result").innerHTML = 'Marks should be between 0 and 100.';
    }
  }
