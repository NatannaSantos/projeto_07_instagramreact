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
                        Curtido por <strong>{props.usuarioDois}</strong> e <strong>outras {props.numeroPessoas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}