/* eslint-disable import/prefer-default-export */
import api from '..';
import { Repo } from './types';

export const getRepos = async (text: string): Promise<Repo[]> => {
  return api<Repo[]>('get', `users/${text}/repos`);
};
