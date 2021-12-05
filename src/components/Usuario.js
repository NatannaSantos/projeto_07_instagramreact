export default function Usuario(props){
    return(
        <div class="usuario">
        {props.imagem && <img src={`assets/img/${props.imagem}`} /> }
        <div class="texto">
          <strong>{props.usuario}</strong>
          {props.nome}
        </div>
      </div>
    );
}