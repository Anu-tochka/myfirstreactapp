import './Profile.css';
import { useCallback } from "react";
import { TextField } from "@material-ui/core";

import { store } from "./store/index";
import { toggleShowName } from "../store/profile/actions";



const store = createStore(profileReducer);

const setShowName = useCallback(() => {
    dispatch(toggleShowName);
  }, [dispatch]);



export default function Profile() {
    const { showName, name } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const setShowName = useCallback(() => {
    dispatch(toggleShowName);
  }, [dispatch]);

  return (
    <div className="profile" style={{marginTop: '50px'}}>
        <FormControlLabel
        control={
          <GreenCheckbox 
           checked={showName}
           value={showName}
           onChange={setShowName}
		   color="primary"
          />}
        label="Show Name"
      />
        {showName && <div>{name}</div>}

    </div>
  );
}