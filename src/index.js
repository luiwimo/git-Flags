import axios from 'axios'; //Similar a request, axios usa promesas
import Game from './Game';
import './styles/main.scss';

function init(){
    //LLamar API
    
    axios.get('https://restcountries.eu/rest/v2/all')
         .then((response)=>{
            //Obtengo data
            console.log(response.status);
            console.log(response.data); //data guarda info
            const game = new Game(response.data)
            game.start()
         })
         .catch((err)=>{
            //Error al llamar data
         })
    

}

init();