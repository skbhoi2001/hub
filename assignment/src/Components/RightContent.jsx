import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAction, getCondition } from './api'

const RightContent = ({newInp}) => {
    const [rule,setRule] = useState([])
    const [condition,setCondition] = useState([])
    const [action,setAction] = useState([])
    const [ncondition,setNcondition] = useState("")
    const [naction,setNaction] = useState("")

    const pharms = useParams()

    useEffect(()=>{
        handleGetInitial()
        handleGet(pharms.id)
        handleAct(pharms.id)
    },[pharms])


    const handleGetInitial = (id)=>{
        return getCondition(id)
                .then((res)=>{
                    setRule(res.data)
                })
                .catch((err)=>{
                    console.log(err);
                })
    }

    const handleGet = (id)=>{
        return getCondition(id)
                .then((res)=>{
                    setCondition(res.data)
                })
                .catch((err)=>{
                    console.log(err);
                })
    }
    const handleAct = (id)=>{
        return getAction(id)
                .then((res)=>{
                    setAction(res.data)
                })
                .catch((err)=>{
                    console.log(err);
                })
    }

const handleDrop = ()=>{
    
}
  return (
   <div>
      <div>
          {
            rule.map((item)=>{
                 <h3>{item.rule}</h3>
            })
          }
      </div>
      <div>
      {
          condition.map((item)=>{
              return(
                  <div key={item.id} >
                    <div>
                    <h5>Button Name</h5>
                    <input type="text" value={`${item.button_name}`} />
                    </div>
                    <div>
                        <button onClick={handleDrop()}> If All </button> <span>of the following conditions are met</span>
                        <div id='dropDown' >
                            <p>A</p>
                            <p>B</p>
                            <p>C</p>
                        </div>
                    </div>
                  </div>
              )
          })
      }
      </div>
   </div>
    
  )
}

export default RightContent