import Imagen from '../../assets/medicinaPets.png'

export default function Imagenes ({url}){

    return(
        <div>
            <img src={url} width={"400"} height={"350"}/>
        </div>
    )

}