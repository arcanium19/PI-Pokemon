import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, postPokemon } from "../../redux/actions";
import style from "./formPokemon.module.css"

const soloNumeros = /^\d+$/;
const esURL = /^https?:.+.(jpg|jpeg|png|webp|avif|gif|svg)$/;
const strVacio = /^\s+$/;



function FormularioPost(){

    const dispatch = useDispatch();
    
    const tipos = useSelector(state=> state.tipos)

    useEffect(()=>{
        if(tipos.length === 0){
        dispatch(getTypes())}
    }, [tipos.length, dispatch])

    const [form, setForm] = useState({
        name: "",
        hp: "",
        atk: "",
        def: "",
        speed: "",
        altura: "",
        peso: "",
        imgURL: "",
        tipo1: "",
        tipo2: "",
        tipos: "",
    })

    const [error, setError] = useState({
        name: "",
        hp: "",
        atk: "",
        def: "",
        speed: "",
        altura: "",
        peso: "",
        imgURL: "",
        tipo1: "",
        tipo2: "",
        tipos: "",
    })


    function validate ({name, hp, atk, def, speed, altura, peso, imgURL}){

    let errors = {};
    //nombres
    if(!name){
        errors.name = "Debe ingresar un nombre";
    }else if(strVacio.test(name)){
        errors.name = "No ingrese un espacio vacio"
    }

    //Que sean numeros
    if(!hp){
        errors.hp = "Debe ingresar un valor";
    }else if(strVacio.test(hp)){
        errors.hp = "No ingrese un espacio vacio"
    }else if(!soloNumeros.test(hp)){errors.hp = "Debe ingresar un numero"}


    if(!atk){
        errors.atk = "Debe ingresar un valor";
    }else if(strVacio.test(atk)){
        errors.atk = "No ingrese un espacio vacio"
    }else if(!soloNumeros.test(atk)){errors.atk = "Debe ingresar un numero"}


    if(!def){
        errors.def = "Debe ingresar un valor";
    }else if(strVacio.test(def)){
        errors.def = "No ingrese un espacio vacio"
    }else if(!soloNumeros.test(def)){errors.def = "Debe ingresar un numero"}


    if(!speed){
        errors.speed = "Debe ingresar un valor";
    }else if(strVacio.test(speed)){
        errors.speed = "No ingrese un espacio vacio"
    }else if(!soloNumeros.test(speed)){errors.speed = "Debe ingresar un numero"}


    if(!altura){
        errors.altura = "Debe ingresar un valor";
    }else if(strVacio.test(altura)){
        errors.altura = "No ingrese un espacio vacio"
    }else if(!soloNumeros.test(altura)){errors.altura = "Debe ingresar un numero"}


    if(!peso){
        errors.peso = "Debe ingresar un valor";
    }else if(strVacio.test(peso)){
        errors.peso = "No ingrese un espacio vacio"
    }else if(!soloNumeros.test(peso)){errors.peso = "Debe ingresar un numero"}


    //que sea una imagen
    if(!imgURL){
        errors.imgURL = "Debe ingresar un valor";
    }else if(strVacio.test(imgURL)){
        errors.imgURL = "No ingrese un espacio vacio"
    }else if(!esURL.test(imgURL)){errors.imgURL = "Debe ingresar una URL valida"}


    return errors;
    }


    //combino el string tipo1 y 2 en un array
    function combinarTipos (){
        let tipo = [];
        if(form.tipo1.length>0){
            tipo.push(form.tipo1);
        }
        if(form.tipo2.length>0){
            tipo.push(form.tipo2);
        }

        form.tipos=tipo;
       

    }

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
        setError(validate({...form, [e.target.name]: e.target.value}))
      }


    function handleSubmit(evento){
        combinarTipos();
        evento.preventDefault();
        dispatch(postPokemon(form));
        console.log(form);
        
          alert("Datos completos");
          setForm({
            name: "",
            hp: "",
            atk: "",
            def: "",
            speed: "",
            altura: "",
            peso: "",
            imgURL: "",
            tipo1: "",
            tipo2: "",
            tipos: "",
          });
        
       }



    return(
        <div className={style.formContainer}>
            <form onSubmit={handleSubmit} className={style.container}>
                <div className={style.groups}>
                    <label htmlFor="name">NOMBRE: </label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Ingresar Nombre (Obligatorio)..."/>{error.name? <p>{error.name}</p>: null}
                </div>
                <div className={style.groups}>
                    <label htmlFor="hp">VIDA: </label>
                    <input type="text" name="hp" value={form.hp} onChange={handleChange} placeholder="Cuanta HP tiene..."/>{error.hp? <p>{error.hp}</p>: null}
                </div>
                <div className={style.groups}>
                    <label htmlFor="atk">ATAQUE: </label>
                    <input type="text" name="atk" value={form.atk} onChange={handleChange} placeholder="Cuanto Ataque Tiene..."/>{error.atk? <p>{error.atk}</p>: null}
                </div>
                <div className={style.groups}>
                    <label htmlFor="def">DEFENSA: </label>
                    <input type="text" name="def" value={form.def} onChange={handleChange} placeholder="Cuanta Defensa tiene..."/>{error.def? <p>{error.def}</p>: null}
                </div>
                <div className={style.groups}>
                    <label htmlFor="speed">VELOCIDAD: </label>
                    <input type="text" name="speed" value={form.speed} onChange={handleChange} placeholder="Cuanta Velocidad tiene..."/>{error.speed? <p>{error.speed}</p>: null}
                </div>
                <div className={style.groups}>
                    <label htmlFor="altura">ALTURA: </label>
                    <input type="text" name="altura" value={form.altura} onChange={handleChange} placeholder="Cual es su Altura..."/>{error.altura? <p>{error.altura}</p>: null}
                </div>
                <div className={style.groups}>
                    <label htmlFor="peso">PESO: </label>
                    <input type="text" name="peso" value={form.peso} onChange={handleChange} placeholder="Cuanto Pesa..."/>{error.peso? <p>{error.peso}</p>: null}
                </div>
                <div className={style.groups}>
                    <label htmlFor="imgURL">IMAGEN: </label>
                    <input type="text" name="imgURL" value={form.imgURL} onChange={handleChange} placeholder="URL aqui..."/>{error.imgURL? <p>{error.imgURL}</p>: null}
                </div>
                <div className={style.groups}>
                    <label htmlFor="tipo1">TIPO: </label>
                    <select name="tipo1" onChange={handleChange}>
                    <option key="none" value="">Selecciona un tipo</option>
                                                {tipos.map(tipo=>{ 
                                                    return <option key={tipo.Nombre} value={tipo.Nombre} >{tipo.Nombre}</option>
                                                })}
                    </select>
                </div>
                <div className={style.groups}>
                    <label htmlFor="tipo2">TIPO: </label>
                    <select name="tipo2" onChange={handleChange}>
                    <option key="none" value="">Selecciona un tipo</option>
                                                {tipos.map(tipo=>{ 
                                                    return <option key={tipo.Nombre} value={tipo.Nombre} >{tipo.Nombre}</option>
                                                })}
                    </select>
                </div>

                <div>
                    {error.name || !form.name ? null : <input type="submit" value="CREAR POKEMON" className={style.send}/>}
                </div>
            </form>
        </div>
    )

}

export default FormularioPost;