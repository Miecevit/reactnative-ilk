import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function App(){

  const [sayac, setSayac] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('#fff');

  useEffect(() => {
    if(sayac==5){
      setBackgroundColor("yellow");
    }
    else if(sayac == (-5)){
      setBackgroundColor("red");
    }
    else{
      setBackgroundColor("#fff");
    }
  },[sayac])

  return(
<>
    <View style={[styles.container, {backgroundColor}]}>
      <Text>{sayac}</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => {
                  setSayac(sayac+1);
                  }}> 

        <Text style={styles.button_text}>Arttir</Text>

      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() =>{
                  setSayac(sayac-1);
                }}> 

        <Text style={styles.button_text}>Azalt</Text>
        
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => setSayac(0)}> 

        <Text style={styles.button_text}>Sıfırla</Text>
        
      </TouchableOpacity>
    </View>
</>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 5,
    marginTop: 10,
    width: 100,
    alignItems: 'center',
  },
  button_text: {
    color: "#fff",
  },
});
