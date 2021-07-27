import './Profile.css';

function Profile(props) {
  return (
    <div className="profile" style={{marginTop: '50px'}}>
      {props.profile}
    </div>
  );
}

export default Profile;
