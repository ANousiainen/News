import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import News from './News';
import Details from './Details';
import {StyleSheet} from 'react-native';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="News">
        <Stack.Screen 
          name="News"
          component={News}
          options={{
            title: 'News',
            headerTitle: 'News'
          }}
        />
        <Stack.Screen 
          name="Details"
          component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    paddingTop: 0,
  },
  news: {
    padding: 20,
  }
})
