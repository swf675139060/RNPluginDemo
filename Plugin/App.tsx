import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet
} from 'react-native';


const App = (props: any) => {

  return (
    <View style={styles.contain}>
      <Text>hello word</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
  }
})

export default App;
