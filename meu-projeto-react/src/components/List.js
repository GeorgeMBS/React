/*Neste caso importamos o componente de fragmento "Item" em outro componente. Nesse caso, um componente fragmento do tipo lista chamado "List".*/

import Item from './Item'

function List () {
    return(
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Html" ano_lancamento={2022} />
                <Item marca="Css" ano_lancamento={2022} />
                <Item marca="Javascript" ano_lancamento={2022} />
                <Item marca="ReactJS" ano_lancamento={2022} />
                <Item marca="Git" ano_lancamento={2022} />
                <Item  />
            
            </ul>
        </>
    )
}

export default List