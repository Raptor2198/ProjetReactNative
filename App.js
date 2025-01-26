import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import { BookProvider } from './context/BookContext'; // Import du contexte
import Home from './screens/Home';
import Search from './screens/Search';
import StatisticsScreen from './screens/StatisticsScreen';
import AboutScreen from './screens/AboutScreen';
import AddBook from './screens/AddBook';
import BookDetails from './screens/BookDetails';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack de navigation pour Home
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddBook" component={AddBook} options={{ title: 'Ajouter un livre' }} />
      <Stack.Screen name="BookDetails" component={BookDetails} options={{ title: 'Détails du livre' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <BookProvider> {/* Encapsulation de l'application dans le provider */}
      <NavigationContainer>
        <Tab.Navigator
screenOptions={({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    let iconName;
    if (route.name === 'Home') {
      iconName = 'home-outline';
    } else if (route.name === 'Search') {
      iconName = 'search-outline';
    } else if (route.name === 'Statistics') {
      iconName = 'stats-chart-outline';
    } else if (route.name === 'About') {
      iconName = 'information-circle-outline';
    }
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarStyle: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
  },
  tabBarActiveTintColor: '#007AFF',
  tabBarInactiveTintColor: '#8E8E93',
})}

        >
          <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
          <Tab.Screen name="Search" component={Search} />
          <Tab.Screen name="Statistics" component={StatisticsScreen} />
          <Tab.Screen name="About" component={AboutScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </BookProvider>
  );
}
