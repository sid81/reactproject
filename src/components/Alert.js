import React from 'react';
import PropTypes from 'prop-types';

export default function Alert(props) {
 return (
   <div style={{height:'50px'}}>  {/* style is a object */}


     
             {props.alert && <div style={{color: "white"}} className={`alert  alert-${props.alert.typeS} alert-dismissible fade show`} role="alert">
                 <strong >{props.alert.type}</strong >: {props.alert.msg}
                 <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
           </div> }
           </div> 
        )
}
