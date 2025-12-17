import UserInfo from "./UserInfo";
function Userprofile(){
    
    const userName = "Lakshmi";
  const userAge = 22;

  return (
    <div>
      <h2>User Profile</h2>
      <UserInfo name={userName} age={userAge} />
    </div>
    )

};
export default Userprofile;