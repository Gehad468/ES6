let person = {
    projectid:  prompt("Please enter your id"),
    projectname: prompt("Please enter your name"),
    duration:  prompt("Please enter your duration"),
  printData:function()
  {return ` project id = ${person.projectid}, project Name=${person.projectname} ,Duration= ${person.duration}`}
  };
  console.log(person.printData())