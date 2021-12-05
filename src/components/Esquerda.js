import Storie from "../components/Storie";

export default function Esquerda() {
    const storys = [
        {
            imagem: "9gag.svg",
            usuario: "9gag",
            categoria: "stories"
        },
        {
            imagem: "meowed.svg",
            usuario: "meowed",
            categoria: "stories"
        },
        {
            imagem: "barked.svg",
            usuario: "barked",
            categoria: "stories"
        },
        {
            imagem: "nathanwpylestrangeplanet.svg",
            usuario: "nathanwpylestrangeplanet",
            categoria: "stories"
        },
        {
            imagem: "wawawicomics.svg",
            usuario: "wawawicomics",
            categoria: "stories"
        },
        {
            imagem: "respondeai.svg",
            usuario: "respondeai",
            categoria: "stories"
        },
        {
            imagem: "filomoderna.svg",
            usuario: "filomoderna",
            categoria: "stories"
        },
        {
            imagem: "memeriagourmet.svg",
            usuario: "memeriagourmet",
            categoria: "stories"
        },

    ]
    return (
        <div class="esquerda">
            <div class="stories">
                {storys
                    .filter((n) => n.categoria === "stories")
                    .map((n) => (
                        <Storie
                            imagem={n.imagem}
                            usuario={n.usuario}
                        />
                    ))}
                <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>

        </div>

    );

}



