import style from './form.module.css'

function Formulario(){
    return (
        <div className={style.container}>
            <div className={style.leftCont}></div>
            <div className={style.wrap}><h1>Bienvenidos al FORMULARIO</h1></div>
            <div className={style.rightCont}></div>
        </div>
    )
}

export default Formulario;