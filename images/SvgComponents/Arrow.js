import React from 'react'
   

const Arrow = ({fill}) => (
    <svg width="15" height="18" viewBox="0 0 11 14" fill={fill} xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M9.46252 4.68567C8.46204 3.64648 7.05652 3 5.5 3C2.4624 3 0 5.4624 0 8.5C0 11.5376 2.4624 14 5.5 14C8.36902 14 10.725 11.8032 10.9775 9H8.9646C8.72192 10.6962 7.26318 12 5.5 12C3.56702 12 2 10.433 2 8.5C2 6.56702 3.56702 5 5.5 5C6.55237 5 7.49622 5.46448 8.13782 6.19958L9.46252 4.68567Z" 
        fill={fill}/>
        <path d="M7 2L9.5 4.5L7 7" stroke={fill} strokeWidth="2" strokeLinecap="square"/>
    </svg>
)

export default Arrow;
   
