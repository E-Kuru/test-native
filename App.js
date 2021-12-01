import React from 'react';
import { StyleSheet, Text, View , Image,Pressable, ActivityIndicator,FlatList} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

export default function App() {

  const [characters, setCharacters] = useState ([])

  useEffect( () => {
    fetch('https://thronesapi.com/api/v2/Characters')
    .then(res => res.json())
    .then(res => setCharacters(res))
  },[])

  console.log(characters);

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

        <ActivityIndicator style={styles.activity} color='red' size='large'/>
      
        <FlatList style={styles.allList} data={characters} renderItem={Character} />
      
    </ScrollView>
  );
}

const Character = ({ item }) => {
  return (
    <View style={styles.imageContainer}>
      <Text style={styles.listText}>{item.fullName}</Text>
      <Image
        style={styles.listImage}
        source={{
          uri: item.imageUrl
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : 'blue',
    height : 200,
    padding : 15,
    marginTop : 50,
  },
  container2 : {
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
    marginTop : 40,
    marginBottom : 40,
  },
  allList : {
    backgroundColor : 'white',
    marginBottom : 40,
  },
  imageContainer : {
    display : 'flex',
    justifyContent : 'space-around',
    alignItems : 'center',
    height : 300,
    marginTop : 10,
  },
  listImage : {
    width : 200,
    height : 200,
  },
  listText : {
    fontWeight : 'bold',
    fontSize : 20
  }
});
