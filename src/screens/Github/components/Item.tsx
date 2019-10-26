import {
  FlatList,
  Image,
  Linking,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import React from 'react';
import starIcon from '../../../assets/icons/icons8-star.png';
import forkIcon from '../../../assets/icons/icons8-merge_git.png';
import iconGlobe from '../../../assets/icons/icons8-globe.png';
import iconPin from '../../../assets/icons/icons8-pin.png';
import iconUnpin from '../../../assets/icons/icons8-unpin.png';
import { Repo } from '../../../services/github/types';
import { AddAction, RemoveAction } from '../hook';

interface ItemProps {
  list: Repo[];
  setFavorites: (value: AddAction | RemoveAction) => void;
  favorites?: Repo[];
}

function Item({ list, setFavorites, favorites }: ItemProps): JSX.Element {
  let newList: Repo[] = list;
  if (favorites && favorites.length > 0) {
    newList = list.filter(item => !favorites.find(fav => fav.id === item.id));
  }
  return (
    <FlatList
      data={newList}
      renderItem={({ item }): JSX.Element => (
        <View style={{ marginBottom: 12 }}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <View>
                <Image
                  source={{ uri: item.owner.avatar_url }}
                  style={{ height: 42, width: 42, margin: 8 }}
                />
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginTop: 5,
                    width: 230
                  }}
                >
                  {item.name || ''}
                </Text>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flexDirection: 'row', marginRight: 8 }}>
                    <Image
                      source={starIcon}
                      style={{
                        height: 16,
                        width: 16,
                        marginTop: 2,
                        marginRight: 2
                      }}
                    />
                    <Text>{item.stargazers_count}</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Image
                      source={forkIcon}
                      style={{
                        height: 16,
                        width: 16,
                        marginTop: 2,
                        marginRight: 2
                      }}
                    />
                    <Text>{item.forks_count}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <TouchableOpacity
                  onPress={(): void => {
                    Linking.openURL(item.homepage || item.html_url).then();
                  }}
                >
                  <Image
                    source={iconGlobe}
                    style={{ height: 24, width: 24, margin: 8 }}
                  />
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  onPress={(): void => {
                    setFavorites(
                      !favorites
                        ? { type: 'REMOVE', id: item.id }
                        : { type: 'ADD', item }
                    );
                  }}
                >
                  <Image
                    source={favorites ? iconPin : iconUnpin}
                    style={{ height: 24, width: 24, margin: 8 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )}
      keyExtractor={(item): string => item.id.toString()}
    />
  );
}

export default Item;
