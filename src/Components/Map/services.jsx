const api_key = "at_ybruWjbYB0qgJxSyczuLhv3l8SgSN"
const ip = "190.78.82.8"

export const api = `https://geo.ipify.org/api/v1?apiKey=at_ybruWjbYB0qgJxSyczuLhv3l8SgSN&ipAddress=190.78.82.8`

onst setDataIp = (Ip) =>{
    const api_key = "at_ybruWjbYB0qgJxSyczuLhv3l8SgSN"
    const url = `https://api.ipfind.com?ip=190.78.82.8&auth=6044a5ca-865c-47cf-bd6f-73eca35cae29`
    axios.get(url)
    .then(response => {
        const { data } = response
        const lat = data.latitude
        const lng = data.longitude
        setData({"lat":`${lat}`,"lng": `${lng}`})
    }).catch(console.log("a fallado"))
    }
}