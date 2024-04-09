import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CountryInfo from "../components/CountryInfo"
import arrow from '../img/arrow-small-left.svg'
function Country() {
    const { name } = useParams(); 
    const [info, setInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
                if (response.ok) {
                    const data = await response.json();
                    setInfo(data[0]); 
                } else {
                    console.error("Failed to fetch country data:", response.status);
                }
            } catch (error) {
                console.error("Error fetching country data:", error);
            }
        };

        fetchData();
    }, [name]); 
    if (info) {
        return (
            <main>
                <div className="util-link">
                    <Link className="btn btn-shadow" to="/"><img className="btn-icon" src={arrow} alt="" /> Back</Link>
                </div>
                <CountryInfo info={info} />
            </main>
        );
    } else {
        return <div>Loading...</div>; 
    }
}

export default Country;
