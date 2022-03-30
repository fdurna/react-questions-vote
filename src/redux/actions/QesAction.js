import * as actions from '../constants/QesConstants';
import axios from 'axios';

export const getQes = () => async (dispatch) => {
    dispatch({type:actions.GET_QES_REQUEST})
    try {
        const data = await axios.get('https://polls.apiblueprint.org/questions');
        console.log(data)
        dispatch({
            type:actions.GET_QES_SUCCESS,
            payload:data
        });
    }   catch(error){
        dispatch({
            type:actions.GET_QES_FAILED,
            payload:error.message
        });
        console.log(error.message)
    }
}
