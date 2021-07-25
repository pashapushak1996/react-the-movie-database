import {StyledUserInfo} from "./StyledUserInfo";
import profilePhoto from '../../assets/images/Avatar.jpg'

export const UserInfo = () => {
    return (
        <StyledUserInfo>
            <img src={ profilePhoto } alt=""/>
            <span>Pavlo Pushak</span>
        </StyledUserInfo>
    );
}


