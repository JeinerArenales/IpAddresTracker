import React from 'react'
import './styles.css'

const Information = ({IpAddres,Location,TimeZone,Isp}) => {
    return (
        <div className="info">
            <div className="info-ip"><p>IP ADDRES</p> <h5>{IpAddres}</h5></div>
            <div className="info-location"><p>LOCATION</p> <h5>{Location}</h5></div>
            <div className="info-time"><p>TIMEZONE</p> <h5>{TimeZone}</h5></div>
            <div className="info-isp"><p>ISP</p> <h5>{Isp}</h5></div>
        </div>
    )

}

export default Information
