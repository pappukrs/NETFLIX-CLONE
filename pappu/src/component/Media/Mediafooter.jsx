import React from 'react'

const Mediafooter = () => {
  return (
    <>
    <div style={{backgroundColor:"black",height:"200px",width:"100%",display:"flex",justifyContent:"space-between"}}>
        <div style={{display:"flex",flexDirection:"column",color:"white"}}>
            <p>Company</p>
            <ul>
                <li>About Netflix</li>
                <li>Newsroom</li>
                <li>Company Assets</li>
                <li>Start watching</li>
            </ul>
        </div>
        <div style={{display:"flex",flexDirection:"column",color:"white"}}>
        <p>Connect</p>
            <ul>
                <li>Contact Us</li>
                <li>facebook</li>
                <li>Twitter</li>
               
            </ul>

        </div>
        <div style={{display:"flex",flexDirection:"column",color:"white"}}>

         <p>Legal</p>
            <ul>
                <li>Terms and Conditions</li>
                <li>Privacy</li>
                <li>Cookie Preferences</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Mediafooter