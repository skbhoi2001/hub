import React from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Styles from "../css/Navbar.module.css"
const Navbar = () => {
  return (
    <div>
        <div className={Styles.navTop}>
            <div>
                <AcUnitIcon/>
            </div>
            <div className={Styles.navData}>
                <div>
                    <p>Demo Custom App</p>
                    <p>APP NAME</p>
                </div>
            </div>
            <div>
                <ArrowForwardIosIcon/>
            </div>
            <div className={Styles.navData}>
                <div>
                    <p>Assignment</p>
                    <p>STAGE</p>
                </div>
            </div>
            <div>
                <ArrowForwardIosIcon/>
            </div>
            <div className={Styles.navData}>
                <div>
                    <p>Create PO</p>
                    <p>BUTTON</p>
                </div>
            </div>
            <div>
                <ArrowForwardIosIcon/>
            </div>
            <div className={Styles.navData}>
                <div>
                    <p>Button Rules</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar