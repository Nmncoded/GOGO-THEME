import { BsMenuButtonWide } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { MdArrowDropDown } from 'react-icons/md';


function Header(){
    
    return (
        <header className="main-header flex-between-center" >
            <div className="icon-searchbar" >
                <BsMenuButtonWide className='color' />
                <div className="searchbar flex-between-center">
                    <input type="text" name='search'  placeholder='Search' />
                    <BiSearch className="icon" />
                </div>
                <div className='language' >
                    EN
                    <MdArrowDropDown />
                </div>
            </div>
            <div className='logo-gogo' >
                <div>
                <img src="/gogo.png" alt="gogo-icon" />
                </div>
                <h1>GOGO</h1>
            </div>
            <div className='profile-section' >
                <button>BUY</button>
                <div className='dumy-icon' >
                <img src="/icons.png" alt="icons" />
                </div>
                <div className='name-photo' >
                    <h1>Sarah Kortney</h1>
                    <div><img src="https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg" alt="user" /></div>
                </div>
            </div>
        </header>
    )
}
export default Header;