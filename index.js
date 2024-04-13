/*Crie uma classe chamada Estudante, essa classe deve conter os atributos: 
nome, e-mail, RA, curso e uma lista com o nome das disciplinas que o 
estudante está matriculado. A classe também deve ter dois métodos: 
primeiraDisciplina e ultimaDisciplina que vão devolver respectivamente a 
primeira disciplina que o estudante está matriculado e a última.
Para testar, crie dois estudantes de exemplo e imprima os valores na tela
*/
class Pessoa {
    constructor (nome,email,RA,curso){
        this.nome = nome
        this.email = email
        this.RA = RA
        this.curso = curso
    }

    mostrarPessoa(){
        console.log(`Me chamo ${this.nome}, estudo no curso ${this.curso}`);
    }
}
Pessoa.mostrarPessoa();