import { View, Text } from 'react-native'
import React from 'react'

export default function App() {

  //for objects


  let arr = [1,2,3,4,5];

  //copy
  let Narr = [...arr];
  console.log(Narr);  // [1,2,3,4,5]

  // merging

  let arr1 = [6,7,8,9,10];
  let merge = [...arr ,...arr1]
  console.log(merge); //[1,2,3,4,5,6,7,8,9,10]

  // add  first & last

  let a = [0,...arr,66];
  console.log(a); // [0,1,2,3,4,5,66]

  // disturcting

  let [first,second,therd,forth,fiveth] = arr
  console.log(second); // 2

  //  for objects

  let q = {id:1,name:avnee}

  //copy

  let r = {}




  return (
    <View>
      <Text>App</Text>
    </View>
  )
}