import { useParams } from "react-router-dom";

function Profile() {

  const { id } = useParams();

  return (
    <>
      <div>Dashboard Profile</div>
      {id}
    </>

  )
}

export default Profile;