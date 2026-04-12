import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function changeAvatar() {}

export default function ProfileAvatar({image} : {image: string}) {
    return (
        <div className="profile-avatar" onClick={() => changeAvatar()}>
            <img src={image} alt="Avatar" />
            <div className="avatar-upload"><FontAwesomeIcon icon={["fas", "camera"]} /> Change Logo</div>
            <input type="file" id="avatarUpload" accept="image/*" hidden/>
        </div>
    );
}