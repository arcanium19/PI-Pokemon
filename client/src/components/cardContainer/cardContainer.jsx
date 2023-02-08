import style from './cardContainer.module.css';
import Card from '../card/card.jsx';


function CardContainer(){
    const pokemons = [
        {
          "ID": 1,
          "Nombre": "bulbasaur",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png",
          "Tipo": [
            "grass",
            "poison"
          ]
        },
        {
          "ID": 2,
          "Nombre": "ivysaur",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/2.png",
          "Tipo": [
            "grass",
            "poison"
          ]
        },
        {
          "ID": 3,
          "Nombre": "venusaur",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/3.png",
          "Tipo": [
            "grass",
            "poison"
          ]
        },
        {
          "ID": 4,
          "Nombre": "charmander",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png",
          "Tipo": [
            "fire"
          ]
        },
        {
          "ID": 5,
          "Nombre": "charmeleon",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/5.png",
          "Tipo": [
            "fire"
          ]
        },
        {
          "ID": 6,
          "Nombre": "charizard",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png",
          "Tipo": [
            "fire",
            "flying"
          ]
        },
        {
          "ID": 7,
          "Nombre": "squirtle",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png",
          "Tipo": [
            "water"
          ]
        },
        {
          "ID": 8,
          "Nombre": "wartortle",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/8.png",
          "Tipo": [
            "water"
          ]
        },
        {
          "ID": 9,
          "Nombre": "blastoise",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/9.png",
          "Tipo": [
            "water"
          ]
        },
        {
          "ID": 10,
          "Nombre": "caterpie",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10.png",
          "Tipo": [
            "bug"
          ]
        },
        {
          "ID": 11,
          "Nombre": "metapod",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/11.png",
          "Tipo": [
            "bug"
          ]
        },
        {
          "ID": 12,
          "Nombre": "butterfree",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/12.png",
          "Tipo": [
            "bug",
            "flying"
          ]
        },
        {
          "ID": 13,
          "Nombre": "weedle",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/13.png",
          "Tipo": [
            "bug",
            "poison"
          ]
        },
        {
          "ID": 14,
          "Nombre": "kakuna",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/14.png",
          "Tipo": [
            "bug",
            "poison"
          ]
        },
        {
          "ID": 15,
          "Nombre": "beedrill",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/15.png",
          "Tipo": [
            "bug",
            "poison"
          ]
        },
        {
          "ID": 16,
          "Nombre": "pidgey",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/16.png",
          "Tipo": [
            "normal",
            "flying"
          ]
        },
        {
          "ID": 17,
          "Nombre": "pidgeotto",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/17.png",
          "Tipo": [
            "normal",
            "flying"
          ]
        },
        {
          "ID": 18,
          "Nombre": "pidgeot",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/18.png",
          "Tipo": [
            "normal",
            "flying"
          ]
        },
        {
          "ID": 19,
          "Nombre": "rattata",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/19.png",
          "Tipo": [
            "normal"
          ]
        },
        {
          "ID": 20,
          "Nombre": "raticate",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png",
          "Tipo": [
            "normal"
          ]
        },
        {
          "ID": 21,
          "Nombre": "spearow",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/21.png",
          "Tipo": [
            "normal",
            "flying"
          ]
        },
        {
          "ID": 22,
          "Nombre": "fearow",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/22.png",
          "Tipo": [
            "normal",
            "flying"
          ]
        },
        {
          "ID": 23,
          "Nombre": "ekans",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/23.png",
          "Tipo": [
            "poison"
          ]
        },
        {
          "ID": 24,
          "Nombre": "arbok",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/24.png",
          "Tipo": [
            "poison"
          ]
        },
        {
          "ID": 25,
          "Nombre": "pikachu",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png",
          "Tipo": [
            "electric"
          ]
        },
        {
          "ID": 26,
          "Nombre": "raichu",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/26.png",
          "Tipo": [
            "electric"
          ]
        },
        {
          "ID": 27,
          "Nombre": "sandshrew",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/27.png",
          "Tipo": [
            "ground"
          ]
        },
        {
          "ID": 28,
          "Nombre": "sandslash",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/28.png",
          "Tipo": [
            "ground"
          ]
        },
        {
          "ID": 29,
          "Nombre": "nidoran-f",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/29.png",
          "Tipo": [
            "poison"
          ]
        },
        {
          "ID": 30,
          "Nombre": "nidorina",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/30.png",
          "Tipo": [
            "poison"
          ]
        },
        {
          "ID": 31,
          "Nombre": "nidoqueen",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/31.png",
          "Tipo": [
            "poison",
            "ground"
          ]
        },
        {
          "ID": 32,
          "Nombre": "nidoran-m",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/32.png",
          "Tipo": [
            "poison"
          ]
        },
        {
          "ID": 33,
          "Nombre": "nidorino",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/33.png",
          "Tipo": [
            "poison"
          ]
        },
        {
          "ID": 34,
          "Nombre": "nidoking",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/34.png",
          "Tipo": [
            "poison",
            "ground"
          ]
        },
        {
          "ID": 35,
          "Nombre": "clefairy",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/35.png",
          "Tipo": [
            "fairy"
          ]
        },
        {
          "ID": 36,
          "Nombre": "clefable",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/36.png",
          "Tipo": [
            "fairy"
          ]
        },
        {
          "ID": 37,
          "Nombre": "vulpix",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/37.png",
          "Tipo": [
            "fire"
          ]
        },
        {
          "ID": 38,
          "Nombre": "ninetales",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/38.png",
          "Tipo": [
            "fire"
          ]
        },
        {
          "ID": 39,
          "Nombre": "jigglypuff",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/39.png",
          "Tipo": [
            "normal",
            "fairy"
          ]
        },
        {
          "ID": 40,
          "Nombre": "wigglytuff",
          "Imagen": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/40.png",
          "Tipo": [
            "normal",
            "fairy"
          ]
        }
      ]

    return(
        <div className={style.container}>
            {
                pokemons.map(pokemon=>{
                    return <Card
                        key={pokemon.ID} 
                        ID={pokemon.ID}
                        Imagen={pokemon.Imagen}
                        Nombre={pokemon.Nombre}
                        Tipo={pokemon.Tipo}
                    />
                })
            }
        </div>
    );
}

export default CardContainer;