export default function Storie(props){
    return (
        
          <div class="story">
          <div class="imagem">
            {props.imagem && <img src={`assets/img/${props.imagem}`} /> }
          </div>
          <div class="usuario">
            {props.usuario}
          </div>
        </div>             
        
   );
} 