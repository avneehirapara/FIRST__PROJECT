
import { View, Text } from 'react-native'
import React from 'react'


export default function App() {
  let arr = [10, 20, 30, 40];
  // let arr1 = [1, 2, 3, 4];

    // arr.pop()
    // arr.push()
    // arr.unshift()
    // arr.shift() 
    //  arr.splice(1,1,)
    //  arr.splice(1,0,22)
    // ans = arr.concat(arr1)
     ans = arr.some((a)=>a>15)

  return (
    <View>
      {
        ans.map((v, i) => {
          return (
            <Text>{v}</Text>
          )

        })
      }




    </View>
  )
}