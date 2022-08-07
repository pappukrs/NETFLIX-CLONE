import React from 'react'

const Footer = () => {

    return (
        <>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", backgroundColor: "black", height: "200px", width: "100%", alignContent: "Center", border: "5px solid blue" }}>
                <div style={{ flex: "3", border: "5px solid white",  alignItems: "center" }}>
                    <select>
                        <option value="English">English</option>
                        <option value="hindi">Hindi</option>
                    </select>
                </div>
                <div style={{ color: "white", display: "flex", flex: "7", gap: "20px", marginTop: "10px", border: "5px solid white" }}>
                    <div>Terms of Use</div>
                    <div>Privacy</div>
                    <div>Cookie Preferences</div>
                    <div>Corporate Information</div>
                </div>
            </div>
        </>
    )
}

export default Footer