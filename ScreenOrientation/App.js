import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, Pressable } from 'react-native';
import Constants from 'expo-constants';
import * as ScreenOrientation from 'expo-screen-orientation';
// You can import from local files
 
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
 
export default function App() {
  const [number, setNumber] = useState(1);
 
  const changenumber = () => {
    if (number < 6) {
      setNumber(number + 1);
    } else {
      setNumber(1);
    }
  };
 
  useEffect(() => {
   if (number === 1) { ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);}
 
    if (number === 2) { ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);}
 
     if (number === 3) { ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);}
 
      if (number === 4) { ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);}
 
       if (number === 5) { ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_DOWN);}

       if (number === 6) { ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);}
 
  }, [number]);
 
  return (<View><Text>Hello</Text><View style={styles.container}><Pressable onPress={() => changenumber()}><Text style={styles.paragraph}>    This number ({number}) should change the Orientation.</Text></Pressable>
  
  
  
  {number===1 ? <View style={styles.background1}><Text style={styles.paragraph}> SHOW UP IF THE APP IS IN LANDSCAPE.</Text></View>
  
  
  
  : number=== 2 ?<View style={styles.container3}><Text style={styles.paragraph}>THIS IS WHAT WILL SHOW UP IF THE APP IS IN LANDSCAPE LEFT.</Text></View>
  
  
  
  : number=== 3 ? <View style={styles.container4}><Text style={styles.paragraph}>THIS IS WHAT WILL SHOW UP IF THE APP IS IN LANDSCAPE RIGHT.</Text></View>
  
  
  : number=== 4 ?<View style={styles.container5}><Text style={styles.paragraph}>THIS IS WHAT WILL SHOW UP IF THE APP IS IN PORTRAIT_UP .</Text></View>

  : number=== 5 ?<View style={styles.container5}><Text style={styles.paragraph}>THIS IS WHAT WILL SHOW UP IF THE APP IS IN PORTRAIT_DOWN .</Text></View>
  
  : number=== 6 ?<View style={styles.container6}><Text style={styles.paragraph}>THIS IS WHAT WILL SHOW UP IF THE APP IS IN PORTRAIT.</Text></View> : null}</View></View>);
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'red',
    padding: 8,
    width: "100%"
  },
    container2: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'darkred',
    padding: 8,
  },
      container3: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'skyblue',
    padding: 8,
  },
      container4: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
    padding: 8,
  },
      container5: {
    flex: 1,
    justifyContent: 'center',
 
    backgroundColor: 'lightgreen',
    padding: 8,
  },
  container6: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'violet',
    padding: 8
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },

  background1: {
    margin: 24,
    height: 600,
    width: 600,
    justifyContent: 'center',
    backgroundColor: 'darkred',
    padding: 8,

  },

  background2: {
    margin: 24,
    height: 200,
    width: 300,
    justifyContent: 'center',
    backgroundColor: 'darkred',
    padding: 8,

  },

});
