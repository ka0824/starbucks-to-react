import logo from "../../images/starbucks_logo.png"
import "../../css/Header.css"
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {

    const subMenus = ["Sign In", "My Starbucks", "Customer Service & Ideas", "Find a Store"];

    return (
        <div className="header-box">
            <div className="inner">
                <a href= "/">
                    <img src={logo} className="logo" alt="STARBUCKS" />
                </a>
                <div className="sub-menu">
                    <ul className="menu">
                    {
                        subMenus.map(el => {
                             return (
                                 <li>
                                     <a href="/">{el}</a>
                                 </li>
                             )
                        })
                    }
                    </ul>
                    <div className="search">
                        <input type="text" />
                        <SearchIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;