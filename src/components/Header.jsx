import Logo from '../assets/logo.png';
import Theme from '../assets/theme.svg';
import Upload from '../assets/upload.svg';
import Chat from '../assets/chat.svg';
import Notification from '../assets/notification.svg';
import Settings from '../assets/settings.svg';
import User from '../assets/user.png';
import { Each } from '../utilis/Each';
import SearchBar from './SearchBar';


export default function Header() {
    let iconsArr = [
        { img: Theme, name: 'theme'},
        { img: Upload, name: 'upload'},
        { img: Chat, name: 'chat'},
        { img: Notification, name: 'notification'},
        { img: Settings, name: 'settings'},
        { img: User, name: 'user'},
    ]
  return (
    <header>
        <div className="d-flex align_center">
            <div className="left-header d-flex">
                <a className='logo'>
                    <img src={Logo} alt="logo" />
                </a>
                <SearchBar />
            </div>
            <div className="right-header d-flex">
                <Each of={iconsArr} render={(item)=>(
                    <a>
                        <img src={item?.img} alt={item.name} />
                    </a>
                )} />
            </div>
        </div>
    </header>
  )
}
