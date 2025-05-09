# Extrator de Termos

Este é um projeto desenvolvido para extrair termos específicos de textos jurídicos. O **Extrator de Termos** identifica palavras entre aspas e palavras em CAIXA ALTA em documentos juridicos, retornando esses termos de forma organizada.

## Tecnologias Utilizadas
- **JavaScript (Node.js)**
- **EcmaScript** (para alterar elementos HTML)
- **Regex** (para busca de padrões em textos)

## Funcionalidades
- Extração de palavras e frases entre aspas (`"termo"`)
- Extração de palavras em **CAIXA ALTA**
- Ordenação de cada termo em linhas separadas para faciliar a colagem em arquivos `.xlsx` com os termos encontrados para utilização em CatTools (MemoQ, Trados Studio, etc)

## Como Rodar o Projeto



### 1. Clone o repositório
```bash
git clone https://github.com/gustamba/Extrator-de-Termos.git
cd Extrator-de-Termos
```

### 2. Suba em uma hospedagem
```bash
# Faça o upload dos arquivos em uma hospedagem
scp -r * usuario@servidor:/caminho/para/diretorio
```
