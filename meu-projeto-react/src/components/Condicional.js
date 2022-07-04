import {useState} from 'react'

function Condicional() {
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
        console.log(`usuário cadastrado com o e-mail ${email}`)
    }

    function limparEmail() {
        setUserEmail('')
    }

    return(
        <div>
            <h2>Cadastre o seu e-mail:</h2>
            <form>
                <input 
                type="email" 
                placeholder="Digite o seu e-mail..." 
                onChange={(e) => setEmail(e.target.value)}
                />
                <button 
                type="submit" 
                onClick={enviarEmail}>
                    Enviar e-mail
                    </button>
                    
            {userEmail &&( // Aqui abrimos chaves e escrvemos uma condicional "se" em react. dissemos que se o user email for true, ou seja, se ele existir, vamos imprimir na tela esta div com o parágrafo mostrando o email do usuário e o botão para tornar o valor de setUserEmail falsa.
                <div>
                    <p>O e-mail do usuário é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar e-mail</button>
                </div>
            )
            }
        
            </form>
            
        </div>
    )

}

export default Condicional