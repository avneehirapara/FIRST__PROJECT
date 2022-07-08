import { View, Text } from 'react-native'
import React from 'react'

export default function App() {
  let data = [1,2,3,4,5]
  //  let x = data.map((v,i)=>{
  //   return v
  //  })
  //  console.log(x);

  let w = data.map((v,i)=>{
     data.splice(1,1,20)
    
  })
  console.log(w);



//  let y = data.filter((v,i)=>{    // when we have more then one value   so we can use return
                                   
//     return v >= 3
//   })
//  console.log(y);

  //  let z = data.filter((v,i)=> v>=4)  // when we have one value we can do without return 
                                           
  //  console.log(z);

  
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}