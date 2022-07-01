import { useState } from 'react'
//Importamos o hook da pasta react para podermos utiliza-lo.


function Form() {

    function cadastrarUsuario(e) {
        e.preventDefault()
        
        console.log(`Usuário ${name} foi cadastrado com a senha ${password}`)
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()
    //variável do nosso estado. Ela vai mudar conforme o evento que estipulamos no input.

    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Digite seu nome" 
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="Digite a sua senha" 
                    onChange={(e) => setPassword(e.target.value)}
                    //Aqui definimos que onChange vai ativar o evento que vai mudar o estado da nossa variável para o valor digitado no campo de input. O que o usuário digitar será o nosso estado.
                    />
                </div>
                <div>
                    <input 
                    type="submit" 
                    value="cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default Form