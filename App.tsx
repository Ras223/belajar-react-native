import React from 'react';
import {ScrollView, View} from 'react-native';
import SampleComponent from './SampleComponent';
import StylingComponent from './StylingComponent';

const App = () => {
  return (
    <ScrollView>
      <View>
        <SampleComponent />
        <StylingComponent />
      </View>
    </ScrollView>
  );
};

export default App;
