# Estudos de testes automatizados com cypress no site saucedemo.com

Estes foram meus primeiros testes automatizados com cypress, utilizando o site saucedemo.com, um site desenvolvido propriamente para a aprendizagem de testes automatizados

*O que os testes fazem?*
- Login: realiza dois testes com validações: Login com credenciais válidas, e login com credenciais inválidas.
- Carrinho: realiza outros dois testes: adicionar um item ao carrinho com sucesso, e remove o item do carrinho com sucesso, esses testes também possuem validação.

*Como rodar os testes?*
1. Clone esse repositório
2. Instale o node e o cypress em sua máquina
3. Configure as variáveis de ambiente com um arquivo cypress.env.json (requer dotenv instalado)
4. Inicie e configure o cypress para e2e
5. Vá em specs e selecione um teste para executar