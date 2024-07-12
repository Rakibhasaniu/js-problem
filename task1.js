//1.Task: Array Filtering And Mapping

// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.
const people = [
    { name: "Rakib", age: 25, gender: "male" },
    { name: "Sohag", age: 30, gender: "male" },
    { name: "Sohana", age: 20, gender: "female" },
    { name: "Diana", age: 28, gender: "female" },
  ];
  

function filterFemale(people) {
    const females = people.filter(person => person.gender === "female");
  
    const names = people.filter(person => person.gender !== "female").map(person => person.name);
  return names;
    // console.log(names);
  }
  
  
  const result = filterFemale(people);
  console.log(result)
  