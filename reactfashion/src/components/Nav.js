import { Link } from "react-router-dom";

export default function Nav(props) {
    return (
        <div className="nav">
            <Link to="/">
                <div>Women's</div>
            </Link>
            <Link to="/">
                <div>Men's</div>
            </Link>
            <Link to="/">
                <div>On the Street</div>
            </Link>
            <Link to="/">
                <div>The Catwalk</div>
            </Link>
            <Link to="/">
                <div>AdWatch</div>
            </Link>
            <Link to="/">
                <div>About</div>
            </Link>
        </div>
    )
};