import './Profile.css';
import { useCallback } from "react";
import { TextField } from "@material-ui/core";

import { store } from "./store/index";
import { toggleShowName } from "../store/profile/actions";



const store = createStore(profileReducer);

const setShowName = useCallback(() => {
    dispatch(toggleShowName);
  }, [dispatch]);

  import { getName } from "../store/profile/selectors";
  const newName = useSelector(getName, shallowEqual);

export const CHANGE_NAME = "PROFILE::CHANGE_NAME";

export default function Profile() {
    const { showName, name } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

 const handleChange = useCallback((e) => {
    setValue(e.target.value);
 }, []);

const setName = useCallback(() => {
    dispatch(changeName(value))
  }, [dispatch, value]);


  return (
    <div className="profile" style={{marginTop: '50px'}}>
        <FormControlLabel
        control={
          <GreenCheckbox 
           checked={showName}
           value={showName}
           onChange={handleChange}
		   color="primary"
          />}
        label="Show Name"
      />
	 <TextField
     style={{ margin: '20px' }}
     id="author"
     label="Outlined"
     variant="outlined"
     value={author}
     onChange={handleChange}
   />
	 <Button variant="contained" color="secondary" onClick={setName}>Click!</Button>
        {showName && <div>{name}</div>}

    </div>
  );
}