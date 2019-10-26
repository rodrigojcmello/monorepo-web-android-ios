import { useReducer, useState } from 'react';
import { Repo } from '../../services/github/types';

export interface AddAction {
  type: 'ADD';
  item: Repo;
}

export interface RemoveAction {
  type: 'REMOVE';
  id: number;
}

type GithubAction = AddAction | RemoveAction;

const favoriteReducer = (state: Repo[], action: GithubAction): Repo[] => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.item];
    case 'REMOVE': {
      const newState: Repo[] = [];
      state.forEach((item): void => {
        if (item.id !== action.id) {
          newState.push(item);
        }
      });
      return newState;
    }
    default:
      return state;
  }
};

interface Github {
  favorites: Repo[];
  repos: Repo[];
  setFavorites: (value: AddAction | RemoveAction) => void;
  setRepos: (value: ((prevState: Repo[]) => Repo[]) | Repo[]) => void;
}

export default function useGithub(): Github {
  const [favorites, setFavorites] = useReducer(favoriteReducer, []);
  const [repos, setRepos] = useState<Repo[]>([]);
  return { repos, setRepos, favorites, setFavorites };
}
