import Login from '../pages/login';
import Inventory from '../pages/inventory';
import Header from '../pages/header'
import Cart from '../pages/Cart';

describe('Carrinho', () => {
    beforeEach(() => {
        //Arrange
        Login.visitarPagina()
        Login.preencherCredenciaisValidas()
    })

    it('Adicionar produto ao carrinho com sucesso', () => {
        //Act
        const qtdItensAdcionados = 1
        Inventory.adicionarProduto('Sauce Labs Backpack')
        
        //Assert
 
        Header.validarQueCarrinhoPossuiitens(1)
        Header.navegarParaCarrinho()

        Cart.validarProdutoPresenteNoCarrinho('Sauce Labs Backpack')
    });

    it('Remover produto do carrinho com sucesso', () => {
        //Arrrange
        Inventory.adicionarProduto('Sauce Labs Backpack')

        //Act
        Inventory.removerProduto('Sauce Labs Backpack')

        //Assert
        Header.validarQueOCarrinhoNaoPossuiItens()
    });
});