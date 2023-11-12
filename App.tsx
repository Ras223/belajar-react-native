import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const App = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: 'red'}} />
      <Text>prawito</Text>
      <Hudoro />
      <Text>mila</Text>
      <Text>azamy</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
    </View>
  );
};

const Hudoro = () => {
  return <Text>Hudoro mangku negoro</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'http://via.placeholder.com/640x360'}}
      style={{width: 100, height: 100}}
    />
  );
};

export default App;
