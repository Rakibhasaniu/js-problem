//1.Task: Array Filtering And Mapping

// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

function filterFemalesAndMapNames(people) {
    const females = people.filter(person => person.gender === "female");
  
    const names = people.filter(person => person.gender !== "female").map(person => person.name);
  
    console.log(names);
  }
  
  const people = [
    { name: "Alice", age: 25, gender: "female" },
    { name: "Bob", age: 30, gender: "male" },
    { name: "Charlie", age: 20, gender: "male" },
    { name: "Diana", age: 28, gender: "female" },
  ];
  
  filterFemalesAndMapNames(people);
  