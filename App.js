import React from 'react';
import { StyleSheet, Text, View , Image,Pressable, ActivityIndicator, FlatList, Modal} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { useEffect, useState } from 'react';

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
    <View>
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

        <ActivityIndicator style={styles.activity} color='white' size='large'/>
      
        
      <FlatList horizontal style={styles.allList} data={characters} renderItem={Character} />

      </ScrollView>


    </View>
  );
}

const Character = ({ item }) => {

  var momo = false;

  const handleSwitchModal =  () => {
    // momo = !momo
    alert(`
    FullName : ${item.fullName}
    Family : ${item.family}
    Title : ${item.title}`)
  }

  return (
    <Pressable style={styles.imageContainer} onLongPress={() => handleSwitchModal()} >
      <Text style={styles.listText}>{item.fullName}</Text>
      <Image
        style={styles.listImage}
        source={{
          uri: item.imageUrl
        }}
      />
      <Modal visible={momo} style={styles.modal}>
        <View>
          <Text style={styles.modalText}>
            {item.fullName}
          </Text>
          <Text style={styles.modalText}>
            {item.family}
          </Text>
          <Text style={styles.modalText}>
            {item.title}
          </Text>
        </View>
      </Modal>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : 'blue',
    padding : 15,
    marginTop : 50,
  },
  container2 : {
    backgroundColor : 'white',
  },
  images : {
    marginLeft : 85,
    marginTop : 45,
    height : 50,
    width : 200
  },
  allText : {
    marginTop : 80,
    marginBottom : 80,
    fontSize : 30,
    textAlign : 'center',
    fontWeight : 'bold',
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
    height : 400,
    overflow : 'scroll',
    display : 'flex',
    backgroundColor : 'white',
    marginBottom : 40,
    borderStyle : 'solid',
    borderColor : 'black',
    borderWidth : 3
  },
  imageContainer : {
    display : 'flex',
    justifyContent : 'space-around',
    alignItems : 'center',
    height : 300,
    width : 200,
    marginTop : 10,
    marginRight : 45,
    marginLeft : 25,
    borderStyle : 'solid',
    borderColor : 'black',
    borderWidth : 3
  },
  listImage : {
    width : 190,
    height : 240,
  },
  listText : {
    fontWeight : 'bold',
    fontSize : 20
  },
  modal : {
    zIndex : 2,
    height : 120,
    width : 120
  },
  modalText : {
    fontSize : 20
  }
});
