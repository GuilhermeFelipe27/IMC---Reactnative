# 🧮 Calculadora de IMC (Web & Mobile)

Projeto de **Calculadora de IMC (Índice de Massa Corporal)** desenvolvido em duas versões:  
- 🌐 **Web** com **HTML, CSS e JavaScript**  
- 📱 **Mobile** com **React Native**  

O usuário informa **peso e altura** (e nome na versão web), e o sistema exibe o resultado do IMC junto com a classificação correspondente.

---

## 🚀 Tecnologias
- **Web:** HTML5, CSS3, JavaScript  
- **Mobile:** React Native, JavaScript  

---

## 📂 Estrutura do Projeto
```
📂 calculadora-imc
├── web
│   ├── index.html   # Estrutura da página
│   ├── imc.css      # Estilos
│   └── imc.js       # Lógica de cálculo
│
└── mobile
    └── App.js       # Código principal em React Native
```

---

## ▶️ Como usar

### 🌐 Versão Web
1. Abra o arquivo `index.html` no navegador.  
2. Preencha **nome, altura e peso**.  
3. Clique em **Calcular** para ver o resultado.

### 📱 Versão Mobile
1. Clone este repositório.  
2. Entre na pasta `mobile`.  
3. Instale as dependências:  
   ```bash
   npm install
   ```
4. Execute o projeto:  
   ```bash
   npx react-native run-android
   ```  
   ou  
   ```bash
   npx react-native run-ios
   ```

---

## 📸 Funcionalidades
- Cálculo automático do **IMC**.  
- Exibição da **classificação** (abaixo do peso, normal, sobrepeso, obesidade).  
- Interface simples e intuitiva.  

---

## 📄 Licença
Uso livre para fins pessoais e educacionais.
