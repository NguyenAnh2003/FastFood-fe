import { useContext } from "react";
import { Store } from "../../store/Store";

const AddressPopUp = () => {
  const {state, dispatch: ctxDispatch} = useContext(Store)
  const {userInfo} = state;
  console.log(userInfo.address);
  
  return (
    <div></div>
  )
}

export default AddressPopUp;