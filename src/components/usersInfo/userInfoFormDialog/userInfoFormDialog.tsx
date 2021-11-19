import React, { MutableRefObject, useEffect, useRef } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ErrorMessage, Field, Form, Formik, getIn } from "formik";
import * as Yup from "yup";
import * as _ from "lodash";
import {
  validationErrorInvalidFormat,
  validationErrorLong,
  validationErrorRequired,
  validationErrorShort,
} from "../../../constants/validationConst";
import { default_regexp } from "../../../constants/appConsts";
import Typography from "../../typography/typography";
import styledButton from "../../../styles/button.styles";
import styledSelectMenu from "../../../styles/selectMenu.styles";
import styledValidation from "../../../styles/validation.styles";
import styledUserInfoFormDialog from "./userInfoFormDialog.styles";
import { isPresent } from "../../../helpers/helpers";

interface FormDialogPropsInterface {
  isOpen?: boolean;
  onSubmit: any;
  onClose: any;
  initValue?: any;
  dialogTitle?: string;
  options?: any;
}

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, validationErrorShort)
    .max(50, validationErrorLong)
    .matches(default_regexp, validationErrorInvalidFormat)
    .required(validationErrorRequired),
  surname: Yup.string()
    .min(1, validationErrorShort)
    .max(50, validationErrorLong)
    .matches(default_regexp, validationErrorInvalidFormat)
    .required(validationErrorRequired),
});

export const UserInfoFormDialog = (props: FormDialogPropsInterface) => {
  const { isOpen, onSubmit, onClose, initValue, dialogTitle, options } = props;
  const [role, setRole] = React.useState("");
  const [selectList, setSelectList] = React.useState();
  const formikRef: MutableRefObject<any> = useRef();
  const buttonStyled = styledButton();
  const userInfoFormDialogStyled = styledUserInfoFormDialog();
  const selectMenuStyled = styledSelectMenu();
  const errorMessageStyled = styledValidation({ color: `#AF1D1DFF` });

  useEffect(() => {
    if (!isPresent(initValue) || !isPresent(options)) {
      return;
    }

    createSelectOptions(options);
    setRole(initValue?.role);
  }, [initValue, options]);

  const createSelectOptions = (value: any) => {
    const optionList =
      value &&
      value.map((item: any) => {
        return {
          name: item,
          value: item,
        };
      });
    setSelectList(optionList);
  };

  const handleClose = () => {
    onClose(false);
  };

  const isValid = (errors: any, controlName: string): boolean => {
    return !!getIn(errors, controlName);
  };

  const sendForm = (formValues: any) => {
    onSubmit(formValues);
    formikRef.current.resetForm();
    handleClose();
  };

  return (
    <Dialog
      className={userInfoFormDialogStyled.dialogWrapper}
      open={isOpen || false}
    >
      <div className={userInfoFormDialogStyled.dialogHead}>
        <DialogTitle className={userInfoFormDialogStyled.dialogTitle}>
          <Typography text={dialogTitle} />
        </DialogTitle>
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </div>
      <Formik
        innerRef={formikRef}
        initialValues={initValue}
        validationSchema={validationSchema}
        enableReinitialize={true}
        onSubmit={(values) => {
          sendForm(values);
        }}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form>
            <FormControl>
              <InputLabel
                id="selectMenuRoleLabel"
                className={selectMenuStyled.selectMenuLabel}
              >
                Role
              </InputLabel>
              <Select
                labelId="selectMenuRoleLabel"
                defaultValue={role}
                value={role}
                name="role"
                label="Role"
                className={selectMenuStyled.selectMenu}
                onChange={(e) => {
                  setRole(e.target.value);
                  setFieldValue(e.target.name, e.target.value);
                }}
              >
                (
                {_.map(selectList, (option: any, index: number) => (
                  <MenuItem key={index} value={option.value}>
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
              <ErrorMessage
                className={errorMessageStyled.errorMessage}
                name="role"
                component="div"
              />
            </FormControl>
            <FormControl>
              <Field type="text" name="name">
                {({ field }: any) => (
                  <div>
                    <TextField
                      id="outlined-size-small"
                      className={userInfoFormDialogStyled.inputWrapper}
                      label="Name"
                      size="small"
                      variant="outlined"
                      value={values && values.name}
                      error={touched.name && isValid(errors, "name")}
                      onChange={(event) =>
                        setFieldValue("name", event.target.value)
                      }
                      {...field}
                    />
                  </div>
                )}
              </Field>
              <ErrorMessage
                className={errorMessageStyled.errorMessage}
                name="name"
                component="div"
              />
            </FormControl>
            <FormControl>
              <Field type="text" name="surname">
                {({ field }: any) => (
                  <div>
                    <TextField
                      id="outlined-size-small"
                      className={userInfoFormDialogStyled.inputWrapper}
                      label="Surname"
                      size="small"
                      variant="outlined"
                      value={values && values.surname}
                      error={touched.surname && isValid(errors, "surname")}
                      onChange={(event) =>
                        setFieldValue("surname", event.target.value)
                      }
                      {...field}
                    />
                  </div>
                )}
              </Field>
              <ErrorMessage
                className={errorMessageStyled.errorMessage}
                name="surname"
                component="div"
              />
            </FormControl>
            <Button
              className={buttonStyled.button}
              type="submit"
              variant="contained"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};
