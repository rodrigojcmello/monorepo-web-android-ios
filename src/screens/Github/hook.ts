import { useReducer, useState } from 'react';
import { Repo } from '../../services/github/types';

interface GithubType {
  repos: Repo[];
  setRepos: (value: ((prevState: Repo[]) => Repo[]) | Repo[]) => void;
}

const favoriteReducer = (state: Repo[], action: any): any => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.repo];
    case 'TOGGLE':
      return state.map(todo => {
        if (todo.id === action.id) {
          return {...todo, done: !todo.done};
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export function useGithub(): GithubType {
  const [favorites, setFavorites] = useReducer<Repo[]>(favoriteReducer, []);
  const [repos, setRepos] = useState<Repo[]>([]);
  return { repos, setRepos };
}

export function useFavorite(): void {}
