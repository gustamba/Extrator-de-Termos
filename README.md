# Extrator de Termos

Este é um projeto desenvolvido para extrair termos específicos de textos jurídicos. O **Extrator de Termos** identifica palavras entre aspas e palavras em CAIXA ALTA em documentos, retornando esses termos de forma organizada.

## Tecnologias Utilizadas
- **JavaScript (Node.js)**
- **Express** (para a criação de servidores)
- **File System (fs)** (para manipulação de arquivos)
- **Regex** (para busca de padrões em textos)

## Funcionalidades
- Extração de palavras e frases entre aspas (`"termo"`)
- Extração de palavras em **CAIXA ALTA**
- Geração de arquivo `.xlsx` com os termos encontrados

## Como Rodar o Projeto

### 1. Clone o repositório
```bash
git clone https://github.com/gustamba/Extrator-de-Termos.git
cd Extrator-de-Termos
