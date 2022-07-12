import { View, Text } from 'react-native'
import React from 'react'

export default function App() {
  let data = [
    {
      id: 101,
      name: 'Abacavir',
      quantity: 25,
      price: 150,
      expiry: 2022,
      status: true
    },
    {
      id: 102,
      name: 'Eltrombopag',
      quantity: 90,
      price: 550,
      expiry: 2021,
      status: true
    },
    {
      id: 103,
      name: 'Meloxicam',
      quantity: 85,
      price: 450,
      expiry: 2025,
      status: false
    },
    {
      id: 104,
      name: 'Allopurinol',
      quantity: 50,
      price: 600,
      expiry: 2023,
      status: true
    },
    {
      id: 105,
      name: 'Phenytoin',
      quantity: 63,
      price: 250,
      expiry: 2021,
      status: false
    }
  ];
   
  let x = data.filter((d,i)=>(d.expiry>=2022))
               .reduce((acc,d,i)=> acc + d.price ,0)
               console.log(x);
               

  

   

  return (
    <View>
      {
        data.map((d,i)=>{
          let{id ,name,quantity ,price,expiry,status} = d;

          return(
            <View key={i}>
              <Text> name =   {name}</Text>
              <Text> expiry = {expiry}</Text>
              <Text> price =  {price}</Text>
              <Text> id =     {id}</Text>
            </View>
          )
        })
      }
      <Text>total price = {x}</Text>
    </View>
  )
}


// import { View, Text } from 'react-native'
// import React from 'react'

// export default function App() {
//    let data =  [
//     {
//       name: "amit",
//       age: 35,
//       salary: 40000,
//       bonus: 1000,
//       status: true
//     },
//     {
//       name: "ajay",
//       age: 25,
//       salary: 38000,
//       bonus: 2000,
//       status: false
//     },
//     {
//       name: "mayur",
//       age: 23,
//       salary: 50000,
//       bonus: 500,
//       status: true
//     },
//     {
//       name: "jay",
//       age: 29,
//       salary: 35000,
//       bonus: 600,
//       status: true
//     },
//     {
//       name: "raj",
//       age: 33,
//       salary: 22000,
//       bonus: 2000,
//       status: true
//     },
//   ];

  
 

//   let z = data.filter((d,i)=> d.salary >=35000)
//           .reduce((acc,d,i)=>acc + d.salary,0);
//   console.log(z);

//   let x = data.filter((d,i)=>d.salary >=35000)
//               .reduce((acc,d,i) => acc + d.bonus ,0 )
//               console.log(x);
   
//   return (
//     <View>
//       <Text> salary = {z}</Text>
//       <Text> bonus = {x}</Text>
//     </View>
//   )
// }


// import { View, Text } from 'react-native'
// import React from 'react'

// export default function App() {
//    let data =  [
//     {
//       name: "amit",
//       age: 35,
//       salary: 40000,
//       bonus: 1000,
//       status: true
//     },
//     {
//       name: "ajay",
//       age: 25,
//       salary: 38000,
//       bonus: 2000,
//       status: false
//     },
//     {
//       name: "mayur",
//       age: 23,
//       salary: 50000,
//       bonus: 500,
//       status: true
//     },
//     {
//       name: "jay",
//       age: 29,
//       salary: 35000,
//       bonus: 600,
//       status: true
//     },
//     {
//       name: "raj",
//       age: 33,
//       salary: 22000,
//       bonus: 2000,
//       status: true
//     },
//   ];

//  let x = data.filter((d,i)=>(d.status === true));
//   let c = data.reduce((acc,d,i)=> acc + d.salary + d.bonus, 0);
//   console.log(x);

//   return (
//     <View>
//       <Text>total-cost = {c}</Text>
//     </View>
//   )
// }


