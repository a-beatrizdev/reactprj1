import { Tabs } from 'expo-router';
import { Text } from 'react-native';

const pink = '#D77EAA';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: pink,
        tabBarInactiveTintColor: '#A99AA4',

        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#F3E5EC',
          height: 62,
          paddingTop: 7,
          paddingBottom: 7,
          elevation: 8,
        },

        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '700',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 17 }}>⌂</Text>
          ),
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: 'Aprender',
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 17 }}>♡</Text>
          ),
        }}
      />

      <Tabs.Screen
        name="desafios"
        options={{
          title: 'Desafios',
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 17 }}>✧</Text>
          ),
        }}
      />

      <Tabs.Screen
        name="perfil"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 17 }}>♙</Text>
          ),
        }}
      />
    </Tabs>
  );
}