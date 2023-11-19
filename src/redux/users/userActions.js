import axios from 'axios'
import { LOGIN_USER_SUCCESS, LOGIN_USER_LOADING,LOGIN_USER_ERROR } from "./userTypes"
import { BASE_URL } from '../../constants/config'


export const getUser=(obj)=>async(dispatch)=>{
    dispatch({type:LOGIN_USER_LOADING})
    try{
    let data = await axios(`${BASE_URL}/user/login`,{
        method:'post',
        data:obj
    })
    console.log(data)

    let {message,token,status} = data.data
    console.log(data.data)
    console.log(token)
    if(status===1){
        dispatch({type:LOGIN_USER_SUCCESS,payload:token})
    }else{
        alert(message)
        dispatch({type:LOGIN_USER_ERROR})

    }

} catch (error) {
dispatch({type:LOGIN_USER_ERROR})
}
}