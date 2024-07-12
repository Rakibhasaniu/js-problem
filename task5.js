// 5.Task: Find And Modify

// Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.

const people = [
    { name: "Rakib", age: 25},
    { name: "Sohag", age: 30 },
    { name: "Sohana", age: 20 },
    { name: "Diana", age: 28},
  ];

  function changeAge(people1,name,age){
    for(let i=0;i<people1.length;i++){
        if(people[i].name===name){
            people[i].age=age;
            break;
        }
    }
    return people1;
    // console.log(people1)
  }

  const result = changeAge(people,'Sohana',252)
  console.log(result);
