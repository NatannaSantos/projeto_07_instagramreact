export default function Posts(props) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    {props.imagem && <img src={`assets/img/${props.imagem}`} />}
                    {props.usuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                {props.imagemDois && <img src={`assets/img/${props.imagemDois}`} />}
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    {props.imagemTres && <img src={`assets/img/${props.imagemTres}`} />}
                    <div class="texto">
                        Curtido por <strong> {props.usuarioDois} </strong> e <strong> outras {props.numeroPessoas} pessoas </strong>
                    </div>
                </div>
                <div class="comentarios">
                    <div class="comentarioSimples">
                        <div class="texto">
                            <strong>{props.usuarioTres} </strong> {props.texto}
                        </div>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>
                    <div class="comentarioSimples">
                        <div class="texto">
                            <strong>{props.usuarioQuatro} </strong> {props.textoDois}
                        </div>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>
                </div>
            </div>
            <div class="comentario">
                <div class="adicao">
                    <ion-icon name="happy-outline"></ion-icon>
                    <input placeholder="Adicione um comentário..."></input>
                </div>
                <strong>Publicar</strong>
            </div>
        </div>
    );
}




