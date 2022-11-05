import { Link } from "react-router-dom";
// static files
import './NotFound.css'
import error from '../../img/not-found.png'

export default function NotFound () {
    return (
        <div className="not-found">
            <img src={error} alt='page not found' />
            <div>
                <h1>404</h1>
                <h2>This is not the web page your are looking for</h2>
                <Link to="/search">Back to safety</Link>
            </div>
        </div>
    );
}
 