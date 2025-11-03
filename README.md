
# Achados e Perdidos — Revisão curta

Resumo rápido das funcionalidades principais do protótipo:

- Login / Perfil
	- Ícone de usuário (`#perfil`) abre/fecha um painel `.conta` (não há autenticação real).

- Página Inicial
	- Lista de itens em cards (`.item`) com foto, nome, descrição e botão "Solicitar Retirada" (toggle visual).
	- Clicar no card abre detalhes se o painel `.menu` estiver presente.

- Registro de Itens
	- Formulário para adicionar item (nome, descrição, foto). Ao confirmar, salva em `localStorage` com data/hora.
	- Botão "Limpar lista" remove todos os itens salvos.

- Armazenamento
	- Itens são persistidos localmente em `localStorage` sob a chave `itens` (JSON).

- Limitações importantes
	- Sem back-end: nada é compartilhado entre navegadores/usuários.
	- Sem autenticação ou controle de permissões — apenas interface para demonstração.

Executar localmente (rápido)

```sh
python3 -m http.server 8000
# abrir http://localhost:8000/Pages/inicial.html
```

Ponto final: protótipo focado em demonstrar UI/fluxos básicos (cadastro local, visualização em cards e interações), ideal para discussão de próximos passos em arquitetura e requisitos.

