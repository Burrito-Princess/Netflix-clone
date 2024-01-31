import "./navbar.scss"
import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png" 
                    alt="" 
                    />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img 
                    src="https://images.pexels.com/photos/5226950/pexels-photo-5226950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt=""
                     />
                     <div className="profile">
                     <ArrowDropDown className="icon"/>
                     <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                     </div>
                     </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar
