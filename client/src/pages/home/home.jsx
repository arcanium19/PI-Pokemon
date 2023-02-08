import style from './home.module.css'

function Home(){
    return (
        <div className={style.container}>
            <div className={style.leftCont}></div>
            <div className={style.wrap}><h1>Bienvenidos a HOME</h1></div>
            <div className={style.rightCont}></div>
        </div>
    );
}

export default Home;