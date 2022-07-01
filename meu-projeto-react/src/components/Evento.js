import Button from './eventos/Button'

function Evento () {
    function meuEvento() {
        console.log("Ativando primeiro evento!")
    }
    
    function segundoEvento() {
        console.log("Ativando o segundo evento!")
    }

    return(
        <div>
            <p>Clique para disparar o evento</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={segundoEvento} text="Segundo Evento"/>
        </div>
    )
}

export default Evento

/*Neste caso inspecionamos a página e abrimos o console para ver o log do evento disparando.*/ 