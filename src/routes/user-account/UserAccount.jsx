import Button from "../../components/button/Button";
import { signOutUser } from "../../utils/firebase/firebase-utils";

const UserAccount = () => {
  return (
    <div>
        <h2>UserAccount</h2>
      <Button content={"Sign Out"} onClick={signOutUser}/>
      
    </div>
  );
};

export default UserAccount;
