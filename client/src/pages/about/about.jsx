import style from './about.module.css';

function About(){
    return(
        <div className={style.container}>
            <div className={style.leftCont}></div>
            <div className={style.wrap}><h1>Este proyecto se encuentra hecho con React-redux-Express-Sequelize-PostgreSQL</h1></div>
            <div className={style.rightCont}></div>
        </div>
    )
}

export default About;