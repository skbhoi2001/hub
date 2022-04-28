import React, { useState } from 'react'
import Navbar from './Navbar'
import Styles from "../css/Content.module.css"
import TextContent from './TextContent'

const Contents = () => {
    const [saveItem, setSaveItem] = useState(false)

    const handleToggle = ()=>{
        setSaveItem(!saveItem)
    }

  return (
    <div>
        <div className={Styles.navContent}>
            <div>
                <Navbar  />
            </div>
            <div>
            {
                saveItem?<button onClick={handleToggle} >Edit</button>:<button onClick={handleToggle}>Done</button>
            }
            </div>
        </div>
        <div>
            <TextContent saveItem={saveItem} />
        </div>
    </div>
  )
}

export default Contents