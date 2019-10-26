async function api<R>(method: 'get' | 'post', endpoint: string): Promise<R> {
  const response = await fetch(`https://api.github.com/${endpoint}`);
  return response.json();
}

export default api;
