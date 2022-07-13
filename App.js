//------->(Condition: Expiry must be greater or equal 2022 year and status is true)


// import { StyleSheet,ScrollView, View, Text } from 'react-native'
// import React from 'react' 

// export default function App() {
//   let data = [
//     {
//       id: 101,
//       name: 'Abacavir',
//       quantity: 25,
//       price: 150,
//       expiry: 2022,
//       status: true
//     },
//     {
//       id: 102,
//       name: 'Eltrombopag',
//       quantity: 90,
//       price: 550,
//       expiry: 2021,
//       status: true
//     },
//     {
//       id: 103,
//       name: 'Meloxicam',
//       quantity: 85,
//       price: 450,
//       expiry: 2025,
//       status: false
//     },
//     {
//       id: 104,
//       name: 'Allopurinol',
//       quantity: 50,
//       price: 600,
//       expiry: 2023,
//       status: true
//     },
//     {
//       id: 105,
//       name: 'Phenytoin',
//       quantity: 63,
//       price: 250,
//       expiry: 2021,
//       status: false
//     }
//   ];
   
//   let x = data.filter((d,i)=>d.expiry>=2022 && d.status === true)
//                .reduce((acc,d,i)=> acc + d.price ,0)
//                console.log(x);

//   let f = data.filter((d,i)=>d.expiry>=2022 && d.status === true)
              
//   return (
//     <ScrollView style = {StyleSheet.container}>
//     <View style = {styles.container}>
//       {
//         f.map((d,i)=>{
//           let{id ,name,quantity ,price,expiry,status} = d;

//           return(
//             <View key={i}>
//               <Text style =  {styles.id}> id =     {id}</Text>
//               <Text  style = {styles.name}> name =   {name}</Text>
//               <Text  style = {styles.id}> quantity ={quantity}</Text>
//               <Text  style = {styles.name}> expiry = {expiry}</Text>
//               <Text  style = {styles.id}> price =  {price}</Text>
//               <Text  style = {styles.name}> status =  {status.toString()}</Text>
//             </View>
//           )
//         })
//       }
//       <Text  style = {styles.total}>Total price = {x}</Text>
//     </View>
//     </ScrollView>
//   )
// }
// let styles = StyleSheet.create({
//   container : {
//          backgroundColor : 'black'
//   },
//   name: {
//     color : 'white',
//     fontSize : 30,
//     fontFamily :'georgia',
//     lineHeight : 90,
    
  
//   },
//   id :{
//    backgroundColor : 'grey',
//    fontSize : 30,
//    fontFamily :'georgia',
//    lineHeight : 90,
//    color: 'white'
//   },
//   total :{
//     color : 'white',
//     fontSize : 30,
//     fontFamily :'georgia',
//     lineHeight : 90,
//     backgroundColor: 'red'
//   },

// })



//----->>(Condition: Employee status must be true and give individual sum of salary and bonus, totalCost)


import { StyleSheet, View, ScrollView,SafeAreaView, Text } from 'react-native'
import React from 'react'

export default function App() {
   let data =  [
    {
      name: "amit",
      age: 35,
      salary: 40000,
      bonus: 1000,
      status: true
    },
    {
      name: "ajay",
      age: 25,
      salary: 38000,
      bonus: 2000,
      status: false
    },
    {
      name: "mayur",
      age: 23,
      salary: 50000,
      bonus: 500,
      status: true
    },
    {
      name: "jay",
      age: 29,
      salary: 35000,
      bonus: 600,
      status: true
    },
    {
      name: "raj",
      age: 33,
      salary: 22000,
      bonus: 2000,
      status: true
    },
  ];

    let x = data.filter((d,i)=>d.status === true)
                .reduce((acc,d,i)=>acc + d.salary + d.bonus ,0)
                 
    let f = data.filter((d,i)=>d.status === true)

  return (
   
    <ScrollView style={styles.container}>
        {
          f.map((d,i)=>{
            let {name , age , salary , bonus , status} = d;
            return(
              <ScrollView key={i} >
                <Text  style={styles.name} >Name :   {name}</Text>
                <Text style={styles.name} >Age  :   {age}</Text>
                <Text style={styles.name} >Salary : {salary}</Text>
                <Text style={styles.name} >Bonus :  {bonus}</Text>
                <Text style={styles.n1} >-----TOTAL SALARY :{bonus + salary}-----</Text>
                <Text style={styles.name} >Status :{status.toString()}</Text>
              </ScrollView>
            )
          })
        }
        <Text style={styles.Name} >-----TotalCost = {x}------</Text>
    </ScrollView>

  )
}
let styles = StyleSheet.create({
  container : {
    backgroundColor : 'black', 
   
    
  },
  name :{
    fontFamily : 'georgia',
    color  : '#7C8589',
    fontSize : 20,
    lineHeight : 35
    
  },
  Name :{
    color : 'darkgrey',
    fontSize : 25,
    fontFamily : 'georgia',
    lineHeight : 35
  },
  n1 : {
    color :'#CCD5D9',
    fontSize : 20,
    lineHeight : 35,
    fontFamily : 'georgia',

    
  }
})



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


