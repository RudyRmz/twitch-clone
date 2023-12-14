
export default function Canal(props){
    let classnames = "canal-container"
    
    if(!props.live){
        classnames += " img-opacity"
    }

    return(
        <div className= {classnames}>
            <div>
            <img className="canal-img" src={props.img} alt="" />
            <p>{props.name}</p>
            </div>
            
            <div>
            {props.live === true ? <div className="indicador"></div> : <p>Desconectado</p>} 
            {props.counter && <p>{props.counter}</p>} 
            </div>
            {/* {props.live === true && <div className="indicador"></div>} */}
            
        </div>
    )
}