import React, { useCallback, useState } from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import { getRepos } from '../../services/github';
import useGithub from './hook';
import Item from './components/Item';

function Github(): JSX.Element {
  const { repos, setRepos, favorites, setFavorites } = useGithub();
  const [textSearch, setTextSearch] = useState('');

  const handleSubmit = useCallback(() => {
    getRepos(textSearch).then(reposGithub => {
      setRepos(reposGithub);
      setTextSearch('');
    });
  }, [textSearch]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFF' }}>
      <View style={{ margin: 12 }}>
        <Text>Nome do repositório ou usuário:</Text>
        <TextInput
          value={textSearch}
          onChangeText={(value): void => setTextSearch(value)}
          onSubmitEditing={handleSubmit}
          style={{ borderBottomWidth: 2 }}
        />
      </View>
      <ScrollView>
        <View style={{ backgroundColor: '#faffad' }}>
          <Item list={favorites} setFavorites={setFavorites} />
        </View>
        <View style={{ backgroundColor: '#FFF' }}>
          <Item
            list={repos}
            setFavorites={setFavorites}
            favorites={favorites}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

Github.navigationOptions = {
  title: 'Github'
};

export default Github;
