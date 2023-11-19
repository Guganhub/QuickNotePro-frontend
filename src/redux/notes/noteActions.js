import { useSelector } from "react-redux"
import { CREATE_NOTES_ERROR, CREATE_NOTES_LOADING, CREATE_NOTES_SUCCESS, DELETE_NOTES_ERROR, DELETE_NOTES_LOADING, DELETE_NOTES_SUCCESS, GET_NOTES_ERROR, GET_NOTES_LOADING, GET_NOTES_SUCCESS, UPDATE_NOTES_ERROR, UPDATE_NOTES_LOADING, UPDATE_NOTES_SUCCESS } from "./noteTypes"
import { BASE_URL } from "../../constants/config"
import axios from "axios"
import { store } from "../store"



export const getNotes=()=>async(dispatch)=>{
    const {token} = store.getState().userReducer

    dispatch({type:GET_NOTES_LOADING})
    try {
        const response = await axios(`${BASE_URL}/note`,{
            method:"get",
            headers:{
                Authorization:token
            }
        })
        const {status,message,data} = response.data
        console.log(message)
        if(status===1){
        dispatch({type:GET_NOTES_SUCCESS,payload:data})
        }
        else{
            dispatch({type:GET_NOTES_ERROR})
        }
    } catch (error) {
        dispatch({type:GET_NOTES_ERROR})
    }
}

export const createNotes=(obj)=>async(dispatch)=>{
    const {token} = store.getState().userReducer
    console.log(token)

    dispatch({type:CREATE_NOTES_LOADING})
    try {
        const response = await axios(`${BASE_URL}/note/create`,{
            method:"post",
            data:obj,
            headers:{
                Authorization:token
            }
        })
        console.log(response)
        const {status,message,data} = response.data
        console.log(response.data)
        if(status===1){
        dispatch({type:CREATE_NOTES_SUCCESS})
        dispatch(getNotes())
        }
        else{
            dispatch({type:CREATE_NOTES_ERROR})
        }
    } catch (error) {
        dispatch({type:CREATE_NOTES_ERROR})
    }
}


export const updateNotes=(id,obj)=>async(dispatch)=>{
    const {token} = store.getState().userReducer

    dispatch({type:UPDATE_NOTES_LOADING})
    try {
        const response = await axios(`${BASE_URL}/note/update`,{
            method:"PATCH",
            data:obj,
            headers:{
                Authorization:token,
                id:id
            }
        })
        const {status,message,data} = response.data
        console.log(message)
        if(status===1){
        dispatch({type:UPDATE_NOTES_SUCCESS,payload:data})
        dispatch(getNotes())
        }
        else{
            dispatch({type:CREATE_NOTES_ERROR})
        }
    } catch (error) {
        dispatch({type:UPDATE_NOTES_ERROR})
    }
}
export const deleteNotes=(id)=>async(dispatch)=>{
    const {token} = store.getState().userReducer

    dispatch({type:DELETE_NOTES_LOADING})
    try {
        const response = await axios(`${BASE_URL}/note/delete`,{
            method:"delete",
            headers:{
                Authorization:token,
                id:id
            }
        })
        const {status,message,data} = response.data
        console.log(message)
        if(status===1){
        dispatch({type:DELETE_NOTES_SUCCESS,payload:data})
        dispatch(getNotes())
        }
        else{
            dispatch({type:DELETE_NOTES_ERROR})
        }
    } catch (error) {
        dispatch({type:DELETE_NOTES_ERROR})
    }
}


