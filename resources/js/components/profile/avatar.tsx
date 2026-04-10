function changeAvatar() {}

export default function ProfileAvatar({image} : {image: string}) {
    return (
        <div className="profile-avatar" onClick={() => changeAvatar()}>
            <img src={image} alt="Avatar" />
            <div className="avatar-upload"><i className="fas fa-camera"></i> Change Logo</div>
            <input type="file" id="avatarUpload" accept="image/*" hidden/>
        </div>
    );
}