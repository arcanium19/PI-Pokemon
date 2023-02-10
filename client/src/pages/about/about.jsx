import style from './about.module.css';
import expressLogo from "../../images/expresslogo.png";
import jony from "../../images/instaperfil.jpg"

function About(){
    return(
        <div className={style.container}>
            <div className={style.leftCont}></div>

            <div className={style.wrap}>
                <h1>INFORMACION IMPORTANTE:</h1>
                <div className={style.presentacion}>
                    <h2>Este proyecto individual fue realizado en menos de 2 semanas por un alumno de <a href='https://www.soyhenry.com/'>SoyHenry</a> para demostrar algunos conocimientos que fue aprendiendo a lo largo del BootCamp, utilizando las siguientes tecnologias:<br/>React - Redux - NodeJS - Express - Sequelize - PostgreSQL.</h2>
                    <img src="https://scontent.ftuc1-2.fna.fbcdn.net/v/t39.30808-6/327366986_419213830382992_5893742950257813018_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hAScKRIbcosAX_TKqhN&tn=QQT8lhXE2p-YgeVR&_nc_ht=scontent.ftuc1-2.fna&oh=00_AfCj2lMToBEA6hVr_baFU6fAmhWwc06Ch8XSPnKOAtOosg&oe=63E94AD4" alt="HenryLogo" height="350px"/>
                </div>
                <div className={style.tecs}>
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" height="80px" alt="React"/>
                    <img src="https://d33wubrfki0l68.cloudfront.net/45ed46a4aa7300c35494e9fc23ff4c1f61f62ab7/b7c39/static/redux_logo_2-24410881e63c96340db17ec232dfd1bf.png" height="80px" alt="Redux"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" height="80px" alt="NodeJS"/>
                    <img src={expressLogo} height="100px" alt="Express"/>
                    <img src="https://hyunseob.github.io/images/sequelizejs.png" height="100px" alt="Sequelize"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png" height="80px" alt="PostgreSQL"/>
                </div>
                <div>
                    <div className={style.perfil}>
                        <img src={jony} alt="Jonathan" width="200px" />
                        <h3>Hola, mi nombre es Jonathan Hernández tengo 26 años y soy estudiante de ingeniería electrónica, la programacion y el diseño grafico siempre fue mi pasion. Me pueden contactar por <a href='https://www.linkedin.com/in/jonnyhz/'>LinkedIn</a></h3>
                    </div>
                </div>
            </div>
            <div className={style.rightCont}></div>
        </div>
    )
}

export default About;