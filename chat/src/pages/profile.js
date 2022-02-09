import { useDispatch, useSelector } from "react-redux";
import { toggleVisibleProfile } from "../store/profile";

export const ProfilePage = () => {
  const { isVisibleProfile, firstName, lastName } = useSelector(
    (state) => state.profile
  );
  const dispatch = useDispatch();

  return (
    <div>
      {isVisibleProfile && (
        <div>
          <h1>Имя: {firstName}</h1>
          <h1>Фамилия: {lastName}</h1>
        </div>
      )}
      <div>
        <button onClick={() => dispatch(toggleVisibleProfile())}>
          toggleVisibleProfile
        </button>
      </div>
    </div>
  );
};
