import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ProfileAvatarProps {name: string; changeAvatar(): void;}

function changeAvatar() {}

export default function ProfileAvatar({name, changeAvatar}: ProfileAvatarProps) {
    const firstLetter = name.charAt(0).toUpperCase();
    return (
        <div className="profile-avatar" onClick={changeAvatar}>
            <div className="avatar-letter" style={{fontSize: "64px"}}>{firstLetter}</div>
            <div className="avatar-upload"><FontAwesomeIcon icon={["fas", "camera"]} />Change Logo</div>
            <input type="file" id="avatarUpload" accept="image/*" hidden/>
        </div>
    );
}