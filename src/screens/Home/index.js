import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Icon from 'react-native-ionicons';
import EmojiList from './components/EmojiList';

const Happy = () => {
  const data = [
    {
      key: 0,
      emoji: String.raw`ヽ(•‿•)ノ`,
    },
    {
      key: 1,
      emoji: String.raw`\(◦'⌣'◦)/`,
    },
    {
      key: 2,
      emoji: String.raw`ヽ(^o^)ノ`,
    },
    {
      key: 3,
      emoji: String.raw`ヽ(ヅ)ノ`,
    },
    {
      key: 4,
      emoji: String.raw`(๑‵●‿●‵๑)`,
    },
    {
      key: 5,
      emoji: String.raw`(｡●́‿●̀｡)`,
    },
    {
      key: 6,
      emoji: String.raw`ლ(╹◡╹ლ)`,
    },
    {
      key: 7,
      emoji: String.raw`ლ(o◡oლ)﻿﻿`,
    },
    {
      key: 8,
      emoji: String.raw`ヽ(＾Д＾)ﾉ`,
    },
    {
      key: 9,
      emoji: String.raw`(ﾉ^_^)ﾉ`,
    },
    {
      key: 10,
      emoji: String.raw`(ノ・∀・)ノ`,
    },
    {
      key: 11,
      emoji: String.raw`＼(~o~)／`,
    },
    {
      key: 12,
      emoji: String.raw`＼(^o^)／`,
    },
    {
      key: 13,
      emoji: String.raw`(✌ﾟ∀ﾟ)☞`,
    },
    {
      key: 14,
      emoji: String.raw`¯\_◉‿◉_/¯`,
    },
    {
      key: 15,
      emoji: String.raw`t(ツ)_/¯`,
    },
  ];

  return <EmojiList data={data} />;
};

const Sad = () => {
  const data = [
    {
      key: 0,
      emoji: String.raw`(⌣̩̩́_⌣̩̩̀)`,
    },
    {
      key: 1,
      emoji: String.raw`(⌣́_⌣̀) `,
    },
    {
      key: 2,
      emoji: String.raw`(´Oƪ)`,
    },
    {
      key: 3,
      emoji: String.raw`(ʃ_⌣̀ )/||`,
    },
    {
      key: 4,
      emoji: String.raw`ヽ(•‿•)ノ`,
    },
    {
      key: 5,
      emoji: String.raw`\(◦'⌣'◦)/`,
    },
    {
      key: 6,
      emoji: String.raw`ヽ(•‿•)ノ`,
    },
    {
      key: 7,
      emoji: String.raw`\(◦'⌣'◦)/`,
    },
  ];

  return <EmojiList data={data} />;
};

const Angry = () => {
  const data = [
    {
      key: 0,
      emoji: String.raw`ヽ(•‿•)ノ`,
    },
    {
      key: 1,
      emoji: String.raw`\(◦'⌣'◦)/`,
    },
    {
      key: 2,
      emoji: String.raw`ヽ(•‿•)ノ`,
    },
    {
      key: 3,
      emoji: String.raw`\(◦'⌣'◦)/`,
    },
    {
      key: 4,
      emoji: String.raw`ヽ(•‿•)ノ`,
    },
    {
      key: 5,
      emoji: String.raw`\(◦'⌣'◦)/`,
    },
    {
      key: 6,
      emoji: String.raw`ヽ(•‿•)ノ`,
    },
    {
      key: 7,
      emoji: String.raw`\(◦'⌣'◦)/`,
    },
  ];

  return <EmojiList data={data} />;
};

const Home = ({navigation}) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: () => {
          var icon;
          switch (route.name) {
            case 'Happy':
              icon = 'happy';
              break;
            case 'Sad':
              icon = 'sad';
              break;
            case 'Angry':
              icon = 'bonfire';
              break;
            default:
              icon = 'add';
              break;
          }
          return <Icon name={icon} />;
        },
      })}>
      <Tab.Screen name="Happy" component={Happy} />
      <Tab.Screen name="Sad" component={Sad} />
      <Tab.Screen name="Angry" component={Angry} />
    </Tab.Navigator>
  );
};

export default Home;
