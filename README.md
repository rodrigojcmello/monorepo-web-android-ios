# Instalação

```$xslt
npm install
```

# Run on Android
```$xslt
react-native run-android
```

# Run on Web
```$xslt
npm run start-web
```
Acesse: http://localhost:8080/github

# Observações

Eu estou no meio de uma preparação para uma palestra sobre compartilhamento de código entre React e React Native, esse teste me pegou de surpresa, então juntei o útil ao agradável, coloquei o teste de vocês na minha POC da palestra, usem a branch master mesmo.

Os itens abaixo são coisas que eu não fiz mas eu sei que são boas práticas, que realmente não foram feita por uma questão de tempo:

- Teste unitário;
- Uso de Axios (deu pau com o Native mais o TypeScript), usei fetch mesmo.
- Redux (não achei necessário usar, usei useReduce mesmo)
- Persistência de dados
- Json-server (todo o estado dos favoritos está no useReduce)
- O estilo está inline, poderia ter sido isolado.
- Animações
- Uma rota só para os favoritos
- Ícones em SVG ou em 3 escalas (1x, 2x, 3x) em PNG
