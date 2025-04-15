import { useState, FC, ReactNode } from "react";
import { useNavigate, useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";

import { useInit } from "../hooks";
import { ROOT_STORE_TYPE } from "../reducer";
import {
  setAuthData,
  setDateTimeConfigs,
} from "../reducer/authentication.slice";
import { getAuthKey } from "../helper/auth.utility";

interface REQUIRE_AUTH_TYPE {
  children: ReactNode;
}

export const RequireAuth: FC<REQUIRE_AUTH_TYPE> = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const authUserData = useSelector(
    (state: ROOT_STORE_TYPE) => state.auth.userAuthData,
  );
  const [isLoading, setIsLoading] = useState(true);

  // TODO: check if the error is coz of unauthentication
  // and if so then redirect, this can be used on action such as button click etc
  const navigate = useNavigate();

  useInit(async () => {
    setIsLoading(true);
    try {
      const authDataRes = await getAuthKey();

      if (typeof authDataRes === "string") {
        dispatch(
          setDateTimeConfigs({
            dateFormat: authDataRes.dateTime,
          }),
        );

        dispatch(
          setAuthData({
            success: true,
            data: authDataRes,
          }),
        );
      } else {
        throw {
          message: "Invalid token",
        };
      }
    } catch (error) {
      let message = "Something went wrong";

      if (error instanceof Error) {
        message = error.message;
      }

      dispatch(
        setAuthData({
          success: false,
          data: message,
        }),
      );

      // TODO: check if the error is coz of unauthentication
      // and if so then redirect
      // navigate("/unauthorized");
    }
    setIsLoading(false);
  });

  if (isLoading) {
    return "loading...";
  } else {
    if (authUserData.success) {
      return children; // Render the protected component if authenticated
    } else {
      return "Unauthorized...";
    }
  }
};
