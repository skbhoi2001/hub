import React, { useEffect, useState } from 'react'
import {v4 as uuid} from "uuid"

import { addData, getData } from './api';
import LeftCont from './LeftCont';
import RightContent from './RightContent';

import Styles from "../css/TextComponent.module.css"
import { Link, useNavigate } from 'react-router-dom';

const TextContent = ({saveItem}) => {
   
    const [data,setData] = useState([])
    const navigate = useNavigate()
    const [newData,setNewData] = useState("")
    const [newInp,setNewInp] = useState(false)

    useEffect(()=>{
        handleGet()
    },[])

    const handleNav = (id)=>{
        navigate(`/${id}`)
    }

    const handleChange = (e)=>{
        setNewData(e.target.value)
    }

    const handleAdd = ()=>{
        const payload = {
            id:uuid,
            rule:newData
        }
        addData({payload})
        let newR = [...data,payload]
        setData(newR)
        
        setNewInp(true)
        newData(" ")
    }

    const handleGet = ()=>{
        return getData()
                .then((res)=>{
                    setData(res.data)
                })
                .catch((err)=>{
                    console.log(err);
                })
    }

  return (
    <div >
        <div className={Styles.bodyContiner}>
        <div className={Styles.contBody}>
                {
                    data?.map((item)=>{
                                return(
                                    <div  key={item.id} >
                                                <div>
                                                    {
                                                    <button onClick={()=>handleNav(item.id)} >
                                                                                {item.rule}
                                                    </button>
                                                    }
                                                </div>
                                        
                                    </div>
                                )
                    })
                }
            <div>
            <input value={newData} type="text" onChange={handleChange} />
                <button onClick={handleAdd}>Add</button>
            </div>
            
            </div>
            <div>
                <RightContent 
                  newInp={newInp}  
                />
            </div>
        </div>
        
    </div>
  )
}

export default TextContent