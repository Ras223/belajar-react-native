import React, {Component} from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <View style={{width: 80, height: 80, backgroundColor: 'red'}} />
      <Text>prawito</Text>
      <Hudoro />
      <Text>mila</Text>
      <Text>azamy</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
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

class BoxGreen extends Component {
  render() {
    return <Text>ini component dari class</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://loremflickr.com/640/360'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={{color: 'blue', fontSize: 24}}>Ini hewan</Text>
      </View>
    );
  }
}

export default SampleComponent;
