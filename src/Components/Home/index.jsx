import React, {useState, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import Information from './../Ipify'
import CreateMap from './../Map'
import Loader from './Loader'
import MiniLoader from './MiniLoader'
import "./styles.css"


const Home = () => {

    const {register ,errors, handleSubmit} = useForm();

    const [Ip, setIp] = useState({ip: "186.28.156.176"})
    const [Data,setData ] = useState()

    useEffect(() => {
        const ipAdress = Ip.ip
        const url = `https://geo.ipify.org/api/v1?apiKey=at_9Ise2mJVuPNSCfVXkkMNA2rfuUgys&ipAddress=${ipAdress}`
        fetch(url)
        .then(response => {
            return response.json();
        }).then(response => {
            const data  = response
            getData(data.ip,data.location.city,data.location.region,data.location.timezone,data.isp,data.location.lat,data.location.lng)
        })
    }
    , [Ip])

    const onSubmit = (data, e) => {
        console.log(data)
        setIp(data)
        e.target.reset()
    }

    const getData = (ip,city,region,timezone,isp,lat,lng) => {
        setData({"ip": `${ip}`, "location":`${city}, ${region}`,"timezone": `${timezone}`,"isp":`${isp}`,"lat": `${lat}`,"lng" : `${lng}` })
    }



        return(
            <div>
                <div className="header">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1>Ip Addres Tracker</h1>
                        <div className="headerSecond">
                            <input className="form-control" name="ip" placeholder="Search for any IP addres or domain" ref={register({required: {value:true, message: 'IP OBLIGATORIO'}})}/>
                            <button className="header-button"><h3>&gt;</h3></button>
                        </div>
                        <span>
                            {errors?.ip?.message}
                        </span>
                    </form>
                    {
                        Data ?
                        <Information
                            IpAddres={Data.ip}
                            Location={Data.location}
                            TimeZone={Data.timezone}
                            Isp={Data.isp}
                        />
                        :
                        <MiniLoader/>
                    }
                </div>
                {
                    Data ?
                    <CreateMap lat={Data.lat} long={Data.lng}/>
                    :
                    <Loader/>
                }
            </div>
        )
}

export default Home
