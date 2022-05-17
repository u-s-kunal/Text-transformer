
import PropTypes from 'prop-types';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg fs-5 navbar-${props.mode==='success'? 'light': 'dark'} bg-${props.mode}`}>
            <div className="container-fluid ">
                <a className="navbar-brand" href="#"><b className='fs-3'>{props.title}</b></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                        <label className={`form-check-label text-${props.mode==='success'? 'dark': 'light'}`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>

                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Title'
}
