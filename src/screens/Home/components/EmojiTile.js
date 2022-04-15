import React from 'react';
import {
  Clipboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const EmojiTile = ({emoji}) => {
  return (
    <TouchableOpacity onPress={() => Clipboard.setString(emoji)}>
      <View style={styles.tile}>
        <Text style={styles.emojiText}>{emoji}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tile: {
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#333',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 8,
    margin: 8,
    marginBottom: 0,
    padding: 16,
  },
  emojiText: {
    textAlign: 'center',
  },
});

export default EmojiTile;
