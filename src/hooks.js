import {useState} from 'react';
import axios from 'axios';

const useFlip = function(faceUp = true){
    const [isFaceUp, setIsFaceUp] = useState(faceUp);

    const flipCard = function(){
        setIsFaceUp(flip => !flip);
    };

    return [isFaceUp, flipCard];
};


const useAxios = function(url){
    const [responses, setResponses] = useState([]);

    const getResponse = async function(restOfURL = ''){
        console.log(restOfURL);
        const response = await axios.get(`${url}${restOfURL}`);
        setResponses(responses => [...responses, {...response.data}]);
    };
    return [responses, getResponse];

}

export {useFlip, useAxios};