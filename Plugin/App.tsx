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
      <Text>欢迎</Text>
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
