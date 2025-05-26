import avatarImage from "../assets/varsamis.jpeg";

function Avatar() {
  return (
    <div className="avatar-container">
      <img src={avatarImage} alt="Avatar" className="avatar-image" />
    </div>
  );
}

export default Avatar;