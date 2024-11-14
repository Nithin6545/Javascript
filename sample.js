
    //Remove Duplicates: Write a function that takes an array of numbers and returns a new array with duplicate numbers removed.
    // function reduplicate(arr)
    //          {return arr.filter((value,index)=>arr.indexOf(value)===index)}   
    
    // let num=[1,2,3,4,4,3]
    // console.log(reduplicate(num));

    
    //using loop
    // function remDup(a){
    //     let newarr=[]
    //     for(let i=0;i<a.length;i++)
    //         {
    //             if(!newarr.includes(a[i]))
    //                     newarr.push(a[i])
    //         }
    //     return newarr
    // }
    // let num=[1,2,3,4,4,3]
    // console.log(remDup(num));


//Find Common Elements: Write a function that takes two arrays and returns an array of common elements found in both arrays.

    // function commonElements(a,b){
    //     return a.filter(value=>b.includes(value));
    // }
    // let array1 = [1, 2, 3, 4, 5];
    // let array2 = [4, 5, 6, 7, 8];
    // console.log(commonElements(array1,array2));


   // Title Case a Sentence: Write a function that takes a sentence (string) and returns it with the first letter of each word capitalized.
    // function titleCase(sen){
    //         return sen
    //                     .split(" ") 
    //                     .map(word=>word.charAt(0).toUpperCase()+word.slice(1).toLowerCase())
    //                     .join(" ")
    // }
    // let sen = "hi my name is nithin"
    // console.log(titleCase(sen));




    //Check for Anagrams: Write a function that takes two strings and returns true if they are anagrams (contain the same letters in different orders), and false otherwise.
    
    // 1234 2341
    // function anagram(a,b){
        
    //     let as = a.split('').sort().join()
    //     let bs = b.split('').sort().join()
    //     return as === bs
    // }
    // let str1 = 'abcde';
    // let str2 = 'bdaec';
    // console.log(anagram(str1,str2));



    // let employees = [
    //     { empNo: 101, name: "Alice", job: "Developer", salary: 50000 },
    //     { empNo: 102, name: "Bob", job: "Designer", salary: 45000 },
    //     { empNo: 103, name: "Charlie", job: "Manager", salary: 60000 }
    //   ];
   
    // let updatedSalaries = employees.map(employee => {
    // return {
    // ...employee,
    // salary: employee.salary * 1.1
    // };
    // });
    // console.log(updatedSalaries);

    // let developers = employees.filter(emp=>emp.job=="Developer");
    // console.log(developers);

    // let totalSal = employees.reduce((emp,sum)=>emp.sum+=emp.salary)
    // console.log(totalSal);



    // const employees = [
    //   { name: "John", age: 28, salary: 45000 },
    //   { name: "Alice", age: 35, salary: 60000 },
    //   { name: "Bob", age: 32, salary: 70000 },
    // ];

    // let func1 = employees.filter(a=>a.age>30 && a.salary>50000)
    // console.log(func1);



    // const products = [
    //   { id: 1, name: "Shirt", price: 20 },
    //   { id: 2, name: "Pants", price: 40 },
    //   { id: 3, name: "Shoes", price: 30 },
    // ];
    
    // let sorted = products.sort((a,b)=>b.price - a.price)
    // console.log(sorted);


    // const students = [
    //   { name: "John", grade: "A" },
    //   { name: "Alice", grade: "B" },
    //   { name: "Bob", grade: "A" },
    // ];


    // function groupby(students){

    //   let groups={}
    //   students.map(a=>{
        
    //     if(!groups[a.grade]){
    //       groups[a.grade] = [];
    //     } 
    //     groups[a.grade].push(a)
    //   })
    //   return groups
    // }
    // let ans = groupby(students)
    // console.log(ans);


    // const products = [
    //   { name: "Laptop", price: 1000 },
    //   { name: "Phone", price: 700 },
    //   { name: "Tablet", price: 600 },
    // ];

    
    // function highest(products){
    //   return products.reduce((a,b)=>{
    //     //return (a.price>b.price?a:b)
    //     if(a.price>b.price)
    //       return a
    //     else
    //       return b
    //   })
    // }

    // console.log(highest(products));

    // const items = [
    //   { name: "Item 1", price: 100 },
    //   { name: "Item 2", price: 200 },
    //   { name: "Item 3", price: 150 },
    // ];
    
    // function avg(items){
    //   const totalPrice = items.reduce((a,b)=>a+b.price,0) //a=0
    //   return totalPrice/items.length
    // }
    // const avgg = avg(items)
    // console.log(avgg);


    const customers1 = [
      { customerId: 1, name: "John", email: "john@example.com" },
      { customerId: 2, name: "Alice", email: "alice@example.com" },
    ];
    const customers2 = [
      { customerId: 2, name: "Alice", email: "alice@example.com" },
      { customerId: 3, name: "Bob", email: "bob@example.com" },
    ];
    
    
    function finalarr(customers1,customers2){
      const mergerarray = [...customers1,...customers2]
      const unqarr = mergerarray.reduce((a,b)=>{
        if(!unqarr)
      })
    }
    
    
    
    
    
      
          

    
    
     




    
    
    
    

      
    


    



            
    



    
        

    
    
    
    
    
    
    

    
    

