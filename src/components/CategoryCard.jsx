export default function GameCard (props){
    let classnames = "game-card"
    
    if(props.preorder === true){
        classnames += " preorder"
    }

    return(
        <article className={classnames}>
            <img src= {props.image} alt="juegito de Zelda" />
            {props.nuevo === true && <div class="text-overlay">Nuevo</div>}
            
            <div className="content">
            <h3>{props.title}</h3>
            <p>{props.espectadores} espectadores</p>
            {/* {props.preorder === true && <p>Pre-order</p>} */}
            {/* {props.preorder === true ? <p>Pre-order</p> : <p>No esta en Pre-order</p>} */}
            <p>
            {props.preorder === true && "Pre-order"}
            {props.offer === true && "Offer"}
            </p>
            <p>{props.price}</p>
            </div>
        </article>
    )
}