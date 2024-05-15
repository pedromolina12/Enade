class No {
    constructor(valor, cor) {
        this.valor = valor;
        this.cor = cor;
        this.proximo = null;
    }
}

class ListaEncadeada {
    constructor() {
        this.cabeca = null;
    }

    inserir(valor, cor) {
        const novoNo = new No(valor, cor);

        if (this.cabeca === null || cor === 'A') {
            if (this.cabeca === null) {
                this.cabeca = novoNo;
            } else if (this.cabeca.cor === 'V') {
                novoNo.proximo = this.cabeca;
                this.cabeca = novoNo;
            } else {
                let atual = this.cabeca;
                while (atual.proximo !== null && atual.proximo.cor === 'A') {
                    atual = atual.proximo;
                }
                novoNo.proximo = atual.proximo;
                atual.proximo = novoNo;
            }
        } else {
            let atual = this.cabeca;
            while (atual.proximo !== null) {
                atual = atual.proximo;
            }
            atual.proximo = novoNo;
        }
    }

    imprimirLista() {
        let atual = this.cabeca;
        while (atual !== null) {
            console.log(`Valor: ${atual.valor}, Cor: ${atual.cor}`);
            atual = atual.proximo;
        }
    }
}

const lista = new ListaEncadeada();
lista.inserir(1, 'V');
lista.inserir(2, 'A');
lista.inserir(3, 'V');
lista.inserir(4, 'A');
lista.inserir(5, 'V');

lista.imprimirLista();
