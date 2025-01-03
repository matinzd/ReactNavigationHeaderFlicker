import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useHeaderHeight} from '@react-navigation/elements';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Button, ScrollView, Text} from 'react-native';

function HomeScreen() {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text>Home Screen</Text>
    </ScrollView>
  );
}

function HomeScreen2() {
  const headerHeight = useHeaderHeight();
  console.log('headerHeight', headerHeight);
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text>Home Screen 2</Text>
      <Text>Header Height: {headerHeight}</Text>
    </ScrollView>
  );
}

const FirstTab = createNativeStackNavigator();

function FirstTabStack() {
  return (
    <FirstTab.Navigator
      screenOptions={{
        headerBlurEffect: 'dark',
        headerTransparent: true,
        headerShadowVisible: true,
        headerTitleAlign: 'center',
      }}>
      <FirstTab.Screen name="Home1" component={HomeScreen} />
      <FirstTab.Screen name="Home2" component={HomeScreen} />
      <FirstTab.Screen name="Home3" component={HomeScreen} />
    </FirstTab.Navigator>
  );
}

const SecondTab = createNativeStackNavigator();

const SecondTabStack = () => {
  return (
    <SecondTab.Navigator
      screenOptions={{
        headerBlurEffect: 'dark',
        headerTransparent: true,
        headerShadowVisible: true,
        headerTitleAlign: 'center',
      }}>
      <SecondTab.Screen name="Home2" component={HomeScreen2} />
      <SecondTab.Screen name="Home3" component={HomeScreen2} />
      <SecondTab.Screen name="Home4" component={HomeScreen2} />
    </SecondTab.Navigator>
  );
};

const Tabs = createBottomTabNavigator();

function TabStack() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        // This will cause the header to flicker when switching to tabs screen only on the first render
        animation: 'fade',
      }}>
      <Tabs.Screen name="FirstTab" component={FirstTabStack} />
      <Tabs.Screen name="SecondTab" component={SecondTabStack} />
    </Tabs.Navigator>
  );
}

const RootStack = createNativeStackNavigator();

const LoginScreen = () => {
  const {reset} = useNavigation();

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text>Login Screen</Text>
      <Button
        title="Login"
        onPress={() => reset({index: 0, routes: [{name: 'Tabs'}]})}
      />
    </ScrollView>
  );
};

const RootStackScreen = () => {
  return (
    <RootStack.Navigator
      screenOptions={{headerShown: false, headerTransparent: true}}>
      <RootStack.Screen name="Login" component={LoginScreen} />
      <RootStack.Screen name="Tabs" component={TabStack} />
    </RootStack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}
