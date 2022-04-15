import React from 'react';
import {FlatList} from 'react-native';
import EmojiTile from './EmojiTile';

const EmojiList = ({data}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => <EmojiTile emoji={item.emoji} />}
    />
  );
};

export default EmojiList;
