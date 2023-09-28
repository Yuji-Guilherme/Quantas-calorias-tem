# 🍎 Quantas calorias tem?
![Funcionamento](https://github.com/Yuji-Guilherme/Quantas-calorias-tem/assets/102609444/2070e6d3-9d46-41be-8533-f8d25dc539c0)

## ✔ Resumo do projeto
Website (100% em português 🇧🇷) onde premite que o usuário possa buscar um alimento, e ver a quantidade de macronutrientes e calorias que o alimento possui.

### Funcionalidades
Na aplicação é possível:
1. Pesquisar um alimento.
2. Filtrar a pesquisa instantaneamente.
3. Ver os macronutrientes e as calorias do alimento escolhido.
4. Alterar a quantidade de gramas do alimento.

## 🛠 Tecnologias e Ferramentas utilizadas
- ``React``
- ``Typescript``
- ``Tanstack React Query``
- ``Zustand``
- ``Tailwind CSS``
- ``Lucide Icons``
- ``Eslint``
- ``Prettier``
- ``Jest``
- ``React Testing Library``
- ``Cypress``

## 📁 Api e Dados Utilizados
No projeto é consumida uma Api própria que retorna todos os 453 items (alimentos e suplementos alimentares), todas as informações nutricionais dos alimentos foram retirados da [tabela TACO](https://www.cfn.org.br/wp-content/uploads/2017/03/taco_4_edicao_ampliada_e_revisada.pdf), e as informações dos suplementos, dos sites das suas respectivas marcas: [Growth](https://www.gsuplementos.com.br), [Max Titanium](https://www.maxtitanium.com.br), [Probiótica](https://www.probiotica.com.br) e [Integralmedica](https://www.integralmedica.com.br).

## 🧪 Testes
Nos testes unitários foi utilizado o Jest + React testing libary, os arquivos de teste se encontram nas pastas ``__tests__`` dentro das pastas dos componentes.

Para o teste  e2e e teste da api foi utilizado o cypress, seus arquivos podem ser encontrados na branch [test](https://github.com/Yuji-Guilherme/Quantas-calorias-tem/tree/test) ou [development](https://github.com/Yuji-Guilherme/Quantas-calorias-tem/tree/development).

> Comando para ver a cobertura de teste: npm run test:cov

## 🌙 Dark Mode
![Dark-mode2](https://github.com/Yuji-Guilherme/Quantas-calorias-tem/assets/102609444/93d0ff87-f3ad-43f9-a5b3-a89e810a7af4)

## 📱 Mobile
![mobile](https://github.com/Yuji-Guilherme/Quantas-calorias-tem/assets/102609444/c7b9e31e-8684-418a-a335-2e457f49a2da)
