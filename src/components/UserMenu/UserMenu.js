import { useDispatch, useSelector } from "react-redux";
import { authSelectors,authOperations } from "../../redux/auth";
import defaultAvatar from './default-avatar.png';
import s from "./UserMenu.module.css";

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);
    const avatar = defaultAvatar;

  return (
    <div className={s.container}>
      <img src={avatar} alt="" width="32" className={s.avatar} />
      <h3 className={s.name}>
        Welcome
        <span>{name}</span>
      </h3>
       <div  className="frame">
        <div className={s.btnList} >
          <button
            type="button"
            onClick={() => dispatch(authOperations.logOut())}
            className={s.btn12}>
            <span> Log out</span>
            <span> Log out</span>
          </button>
        </div>
      </div>
    
    </div>
  );
};