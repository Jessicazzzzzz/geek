import React from 'react'
import Icon from '../../components/Icon'
import styles from './index.module.scss'

import {useNavigate} from 'react-router-dom'
// function withRouter(Cpn){
//   function ComponetnWithRouterProp(props){
//     const location = useLocation()
//     const navigate = useNavigate()
//     const params = useParams()
//     return <Cpn {...props} router={{location,navigate,params}}/>
//   }
//   return ComponetnWithRouterProp

// } 
 function NavBar({children,extra}) {
  const navigate = useNavigate()
  const back =()=>{
   console.log(navigate(-1));
   
  }
  

  return (
    <div className={styles.root}>
    <div className="left">
     <Icon type='icon-iconarrowl' onClick={back}/>
    </div>
    <div className="title">{children}</div>
    <div className="right">{extra}</div>
   </div>
  )
}
// export default withRouter(NavBar)
export default NavBar
