import React from 'react';
import { StyleSheet, Text, View , Image,Pressable, ActivityIndicator} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function App() {

  const handlePress = () => {
    alert('Heyyy')
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container2}>
          <Text style={styles.allText}>
            Hey
          </Text>
          <Text style={styles.allText}>
            Hola
          </Text>
          <Text style={styles.allText}>
            Hello
          </Text>
          <Image
            style={styles.images}
            source={{uri: 'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png',}}
          />   
          <Image
            style={styles.images}
            source={require('./konexio.png')}      
            />    

          <Pressable style={styles.pressable} onPress={handlePress}>
              <Text style={styles.allText}>
                Press it !
              </Text>
          </Pressable>

      </View>

          <ActivityIndicator style={styles.activity} color='#ffff' size='large'/>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : 'blue',
    height : 200,
    padding : 15,
    marginTop : 50,
  },
  container2 : {
    // height : 150,
    backgroundColor : 'white',
  },
  allText : {
    marginTop : 80,
    marginBottom : 80,
    fontSize : 30,
    color : 'black',
    textAlign : 'center',
    fontWeight : 'bold',
  },
  images : {
    marginLeft : 85,
    marginTop : 45,
    height : 50,
    width : 200
  },
  pressable : {
    height : 40,
    display : 'flex',
    justifyContent : 'center',
    marginLeft : 85,
    marginTop : 45,
    marginBottom : 45,
    width : 200,
    backgroundColor : 'white',
    borderStyle : 'solid',
    borderColor : 'black',
    borderWidth : 3
  },
  activity : {
    marginTop : 15,
    marginBottom : 40,
  }
});
