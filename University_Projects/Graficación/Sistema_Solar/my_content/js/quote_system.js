import { getRandomInt} from "./general_utils.js";

const quotes = {
    "891":  {
        quote : "No puedo contentarme con tener razón yo solo.",
        author : "Henri-Frédéric Amiel",
        life : "1821-1881", 
        profession : "escritor y profesor suizo"
    },
    "892" : {
        quote: "También en los dominios del espíritu reina la ley del más fuerte.",
        author : "Antonin Artaud" ,
        life : "1896-1948",
        profession : "poeta y dramaturgo francés."
    },
    "893" : {	
        quote : "Las circunstancias cambian la lógica.",
        author : "Jaime Balmes",
        life : "1810-1848",
        profession : "sacerdote, filósofo y teólogo español."
    },
    "894" : {	
        quote : "En ciertos momentos, la única forma de tener razón es perdiéndola.",
        author : "José Bergamín",
        life : "1895-1983",
        profession : "escritor español."
    },
    "895" : {	
        quote : "Estar completamente seguro es errar en voz alta.",
        author : "Ambrose Bierce",
        life : "1842-1914",
        profession : "escritor y periodista estadounidense."
    },
    "896" : {	
        quote : "El hombre libre es el que no teme ir hasta el final de su pensamiento.",
        author : "Léon Blum",
        life : "1872-1950",
        profession : "escritor y estadista francés."
    },
    "897" : {	
        quote : "Los más obstinados suelen ser los más equivocados, como todos los que no han aprendido a dudar.",
        author : "Samuel Butler",
        life : "1612-1680",
        profession : "escritor inglés."
    },
    "898" : {	
        quote : "Sobre la hamaca del buen sentido, el espíritu se adormece.",
        author : "José Camón Aznar",
        life : "1898-1979",
        profession : "crítico, historiador y profesor español."
    },
    "899" : {	
        quote : "La necesidad de tener razón: señal de espíritu vulgar.",
        author : "Albert Camus",
        life : "1913-1960",
        profession : "escritor francés."
    },
    "900" : {	 
        quote : "Con  el  espíritu  sucede  lo  mismo  que  con  el  estómago:  sólo  puede confiársele aquello que pueda digerir.",
        author : "Winston Churchill",
        life : "1874-1965",
        profession : "estadista y escritor inglés."
    },
    "901" : {	
        quote : "Un fanático es alguien que no puede cambiar de mentalidad y no quiere cambiar de tema.",
        author : "Winston Churchill",
        life : "1874-1965",
        profession : "estadista y escritor inglés."
    }
};

export function button(tts){
    const quoted = quotes[getRandomInt(891, 901).toString()];
    // console.log(quoted);
    if(tts) textToSpeech(quoted);
    return quoted;
}

export function findQuote(){
    const quoted = quotes[getRandomInt(891, 901).toString()];
    // console.log(quoted);
    return quoted;
}

export function textToSpeech(text){
    // console.log("TTSing: " + text);
    var msg = new SpeechSynthesisUtterance(text);
    msg.rate = 0.69;
    window.speechSynthesis.speak(msg);
}