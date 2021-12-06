import Storie from "../components/Storie";
import Posts from "../components/Posts";

export default function Esquerda() {
    const storys = [
        {
            imagem: "9gag.svg",
            usuario: "9gag",
            
        },
        {
            imagem: "meowed.svg",
            usuario: "meowed",
            
        },
        {
            imagem: "barked.svg",
            usuario: "barked",
            
        },
        {
            imagem: "nathanwpylestrangeplanet.svg",
            usuario: "nathanwpylestrangeplanet",
          
        },
        {
            imagem: "wawawicomics.svg",
            usuario: "wawawicomics",
            
        },
        {
            imagem: "respondeai.svg",
            usuario: "respondeai",
            
        },
        {
            imagem: "filomoderna.svg",
            usuario: "filomoderna",
            
        },
        {
            imagem: "memeriagourmet.svg",
            usuario: "memeriagourmet",
            
        },

    ]

    const post = [
        {
            imagem: "meowed.svg",
            usuario:  "meowed",
            imagemDois: "gato-telefone.svg",
            imagemTres: "respondeai.svg",
            usuarioDois: "respondeai",
            numeroPessoas: "101.523",
        },
        {
            imagem: "barked.svg",
            usuario:  "barked",
            imagemDois: "dog.svg",
            imagemTres: "adorable_animals.svg",
            usuarioDois: "adorable_animals",
            numeroPessoas: "99.159"
        }
    ]

    return (
        <div class="esquerda">
            <div class="stories">
                {storys
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
            <div class = "posts">
            {post
                    .map((m) => (
                        <Posts
                            imagem={m.imagem}
                            usuario={m.usuario}
                            imagemDois={m.imagemDois}
                            imagemTres={m.imagemTres}
                            usuarioDois={m.usuarioDois}
                            numeroPessoas={m.numeroPessoas}
                        />
                    ))}
            </div>
        </div>

    );

}



