import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const StylingComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'blue',
          borderWidth: 2,
          borderColor: 'red',
          marginTop: 20,
        }}
      />
      <View
        style={{
          padding: 10,
          backgroundColor: 'gray',
          width: 212,
          borderRadius: 6,
        }}>
        <Image
          source={{uri: 'https://placekitten.com/640/360'}}
          style={{width: 188, height: 107}}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            marginTop: 5,
          }}>
          New Cat
        </Text>
        <Text
          style={{
            color: 'orange',
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 5,
          }}>
          Rp. 25.000.000
        </Text>
        <Text
          style={{
            fontSize: 14,
            marginTop: 5,
          }}>
          Jakarta Pusat
        </Text>
        <View
          style={{backgroundColor: 'green', borderRadius: 20, marginTop: 5}}>
          <Text style={{textAlign: 'center', paddingVertical: 3}}>Beli</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default StylingComponent;
