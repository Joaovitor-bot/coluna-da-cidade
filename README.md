coluna-da-cidade
Aplicativo de fofocas inspirado em Sex and the City, feito com React Native e Expo. 🗞️ Coluna da Cidade — App de Fofocas Interativas 

O Coluna da Cidade é um aplicativo de fofocas inspirado no universo de Sex and the City. A proposta é trazer o clima divertido de uma coluna de fofocas moderna, onde os usuários podem postar histórias anônimas, ler tendências e descobrir curiosidades da cidade.

O projeto foi desenvolvido em React Native com Expo, utilizando o sistema de navegação entre telas do @react-navigation e armazenamento local com AsyncStorage.

🎯 Objetivo

Criar um aplicativo leve, intuitivo e elegante, que simula uma coluna digital de fofocas — permitindo:

Postar fofocas de forma anônima;

Visualizar fofocas populares (Tendências);

Ler informações sobre o propósito da coluna.

🧩 Estrutura do Projeto

O projeto é composto por três telas principais:

🏠 1. Home

Tela inicial onde o usuário pode digitar e publicar uma fofoca. Cada fofoca é salva localmente no dispositivo usando AsyncStorage, garantindo que os dados continuem disponíveis mesmo após fechar o app.

Recursos:

Campo de texto para digitar fofocas;

Botão de publicação;

Lista de fofocas postadas exibidas em cartões.

🔥 2. Tendências

Exibe as fofocas mais populares da cidade (nesta versão, simuladas com exemplos estáticos). Futuramente, pode ser conectada a uma API ou sistema de votos para gerar ranking real.

Recursos:

Lista das fofocas mais comentadas;

Interface estilizada em tons de rosa e branco.

💅 3. Sobre

Apresenta o conceito e inspiração do app, destacando o tema Sex and the City e o foco na leveza e diversão.

Recursos:

Texto explicativo sobre o projeto;

Botão para voltar à tela inicial.

⚙️ Tecnologias Utilizadas Tecnologia // Função React Native // Base do desenvolvimento mobile Expo // Ambiente de execução e testes React Navigation // Controle de navegação entre telas AsyncStorage // Armazenamento local de dados Hooks (useState, useEffect) // Gerenciamento de estado e efeitos 💻 Como Executar o Projeto ▶️ No Expo Snack

Acesse: https://snack.expo.dev

Crie um novo projeto (“Create Snack”)

Cole o código dos três arquivos:

App.js

Home.js

NovaFofoca.js

TelaSobre.js

Clique em Run ▶️ para visualizar no simulador.

💡 Também é possível escanear o QR Code no celular usando o app Expo Go (disponível na Play Store e App Store).

🧠 Conceitos Aprendidos

Durante o desenvolvimento deste projeto, aprendi:

A criar e organizar componentes no React Native;

A usar navegação entre múltiplas telas com React Navigation;

A armazenar dados com AsyncStorage;

A aplicar estilos com o StyleSheet;

A estruturar um projeto com tema e propósito criativo.

🎨 Design e Tema

O visual foi inspirado no estilo elegante e feminino de Sex and the City, com:

Paleta em tons de rosa, branco e lilás;

Fontes modernas e legíveis;

Ícones e emojis que reforçam o tom leve e divertido do app.

🚀 Futuras Melhorias

Sistema de curtidas e ranking real de “fofocas mais comentadas”;

Perfis de usuários anônimos;

Compartilhamento em redes sociais;

Integração com banco de dados online (Firebase ou Supabase).

🧑‍💻 Autor

João Rodrigues

Estudante de Análise e Desenvolvimento de Sistemas na UNINASSAU Desenvolvedor iniciante em Front-End e Mobile
