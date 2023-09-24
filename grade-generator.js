function studentGrade(){
  //propmt the user to input the students marks.
  let marksInput = prompt('Enter students marks');

 //Conditions to be met for the marks.
  if(marksInput < 0 || marksInput>100){
    console.log('Please enter a value between 0 and 100');
  }

  let grade='';
  
//Conditions that the entered grade is subjected to.
  if(marksInput > 79){
    grade = 'A';

  }else if(marksInput >=60  && marksInput < 79){
    grade = 'B';

  }else if(marksInput >=49  && marksInput < 60){
    grade = 'C';

  }else if(marksInput >=40 && marksInput < 49){
    grade = 'D';

  }else if(marksInput <40){
    grade = 'E'
  }

  //Out put value.
  console.log(`The student's grade is: ${grade}`);
}
calculateGrade();