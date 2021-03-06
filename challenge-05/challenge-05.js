/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/ let newArr = [1, 2, 3, 4, 5]
// ?

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/ let newFunction = () => newArr
// ?

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/ console.log(newFunction()[4])
// ?

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?



let secondFunction = (arr, index) => arr[index]
let myArr = [1, 25, 6, 8, 6, 280]

console.log(secondFunction(myArr, 2))

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?

let otherVar = ['cinco', null, undefined, 9, function parteDoArray(){}]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?

let retornarValores = () => otherVar

console.log(retornarValores())
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?

function findBook(bookName){
    let allBooks = {
        'As viagens de Guliver':{
            quantidadeDePaginas:100,
            autor: 'Alfredo',
            editora:'Abril'
        },
        'Don Quixote':{
            quantidadeDePaginas:100,
            autor: 'Alfredo',
            editora:'Abril'
        },
        'O Conde de MonteCristo':{
            quantidadeDePaginas:100,
            autor: 'Alfredo',
            editora:'Abril'
        }
    }

    return !bookName? allBooks: allBooks[bookName]
}

console.log(findBook('O Conde de MonteCristo'))
/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?
//console.log(books(1))
/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?
console.log(`O livro O Conde de MonteCristo tem ${findBook('O Conde de MonteCristo').quantidadeDePaginas} páginas`)
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?
console.log(`O autor do livro O Conde de MonteCristo é ${findBook('O Conde de MonteCristo').autor}`)
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
console.log(`O livro O Conde de MonteCristo foi publicado pela editora ${findBook('O Conde de MonteCristo').editora}`)