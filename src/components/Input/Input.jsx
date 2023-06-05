    import React, { useState } from 'react'
    import "./index.css";
    import Form from 'react-bootstrap/Form';
    
    export const input = ({onChangeInput, placeholder, className}) => {
        const [value,setValue] = useState


        return 
        <Form.Control 
        type="text" 
        className={className} 
        placeholder={placeholder}  
        onChange={(e) => onChangeInput(e)} 
        />
    };
    
