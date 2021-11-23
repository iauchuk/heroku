import React, { useState } from "react";
import { Formik, Form } from "formik";
import { Button, FormControl, TextField } from "@mui/material";
import { getTokens } from "../../../store/tokens/tokens.actions";
import { useDispatch, useSelector } from "react-redux";
import { StoreStateInterface } from "../../../interfaces/storeStateInterface/storeStateInterface";
import { isPresent } from "../../../helpers/helpers";
import { decodeToken, useJwt } from "react-jwt";
import * as _ from "lodash";
import { useHistory } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const token = useSelector(({ tokens }: StoreStateInterface) => {
    if (!isPresent(tokens.token)) {
      return;
    }
    return (tokens && tokens?.token[0]) ?? [];
  });
  const currentToken = token?.token;
  const [showError, setShowError] = useState(false);
  const { decodedToken, isExpired } = useJwt(currentToken);
  const sendAuth = (formValues: any) => {
    getTokens()(dispatch);
    const isEqual = _.isEqual(decodedToken, formValues);
    if (isEqual) {
      localStorage.setItem("accessToken", currentToken);
      history.push("/");
    }
    setShowError(true);
  };

  return (
    <div>
      <label>ASF</label>
      {showError ? <div>Incorrect data</div> : ""}
      <Formik
        initialValues={{ login: "", password: "" }}
        enableReinitialize={true}
        onSubmit={(values) => {
          sendAuth(values);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <FormControl>
              <TextField
                label="Login"
                value={values && values.login}
                onChange={(event) => {
                  setFieldValue("login", event.target.value);
                }}
              />
            </FormControl>
            <FormControl>
              <TextField
                label="Password"
                type="password"
                autoComplete={""}
                value={values && values.password}
                onChange={(event) => {
                  setFieldValue("password", event.target.value);
                }}
              />
            </FormControl>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
