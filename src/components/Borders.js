import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

const Border = ({ bordercode }) => { 
    const [borderData, setBorderData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchBordersData = async () => {
            try {
                const responseBorder = await fetch(`https://restcountries.com/v3.1/alpha/${bordercode}`)
                if(responseBorder.ok){
                    const data = await responseBorder.json(); 
                    setBorderData(data[0]); 
                } else {
                    setError(`Failed to fetch country data: ${responseBorder.status}`)
                }
            } catch (error) {
                setError("Error fetching border countries:", error)
            } 
        };

        fetchBordersData();
    }, [bordercode]);



    if(error) {
        return <>Error: {error}</>
    }

    if(borderData){
        const linkurl=`/country/${borderData.name.common}`

        return <Link className="btn" to={linkurl}>{borderData.name.common}</Link>
    }

    return <>No border data found</>
};

export default Border;
