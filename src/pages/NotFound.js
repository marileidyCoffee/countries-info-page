import { Link} from "react-router-dom";

const NotFound= ()=>{

    return(
        <main>
            <h1>
                Not Found
            </h1>
            <br />
            <br />
            <Link style={{width: "fit-content"}} className="btn" to='/'>Ir a inicio</Link>
        </main>
    )
}
export default NotFound