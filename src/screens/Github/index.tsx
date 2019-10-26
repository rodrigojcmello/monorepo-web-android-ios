import React, { useCallback, useState } from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Linking
} from 'react-native';
import { getRepos } from '../../services/github';
import { useGithub } from './hook';
import starIcon from '../../assets/icons/icons8-star.png';
import forkIcon from '../../assets/icons/icons8-merge_git.png';
import iconGlobe from '../../assets/icons/icons8-globe.png';
import iconPin from '../../assets/icons/icons8-pin.png';

function Github(): JSX.Element {
  const { repos, setRepos } = useGithub();
  const [textSearch, setTextSearch] = useState('');

  const handleSubmit = useCallback(() => {
    getRepos(textSearch).then(reposGithub => {
      console.log({ reposGithub });
      setRepos(reposGithub);
    });
  }, [textSearch]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <View>
        <Text>Github</Text>
      </View>
      <TextInput
        value={textSearch}
        onChangeText={(value): void => setTextSearch(value)}
        onSubmitEditing={handleSubmit}
        style={{ borderBottomWidth: 2 }}
      />
      <FlatList
        data={repos}
        extraData={repos}
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
                  <TouchableOpacity onPress={(): void => {}}>
                    <Image
                      source={iconPin}
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
    </SafeAreaView>
  );
}

export default Github;
