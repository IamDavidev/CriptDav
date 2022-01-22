import {useState, useEffect} from 'react'
import { getFinance } from '../services/getFinance'


export const useFinance = () => {
    const [data, setData ] = useState([])
    useEffect(()=> {
        getFinance().then(res => setData(res))
    },[])

    return data
}