import React, { useContext, useEffect, useState, Fragment } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Alert } from "reactstrap";
import UserContext from "../../context/userContext";
const USerProfile = (props) => {
  const [userInfo, setUSer] = useState({
    avatar: "",
    email: "",
    first_name: "",
    id: "",
    last_name: "",
  });
  const [update, updated] = useState(false);
  const userContext = useContext(UserContext);
  const { user, getUser, clearUSer } = userContext;
  const { avatar, email, first_name, last_name } = userInfo;

  useEffect(() => {
    getUser(props.match.params.id);
    console.log("getUser");
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (user !== null) {
      setUSer(user);
      console.log("setUSer");
    }
    return () => {
      clearUSer();
    };
    // eslint-disable-next-line
  }, [user]);

  const onChange = (e) => {
    setUSer({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo, "updated");
    if (user !== userInfo) {
      updated(true);
      setTimeout(() => {
        updated(false);
      }, 5000);
    }
  };
  return (
    <Fragment>
      <br />
      {update && <Alert color='success'>Profile Updatyed Successfully</Alert>}

      <Form onSubmit={onSubmit}>
        <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
          <img src={avatar} style={{ borderRadius: "50%" }} alt='' />
        </FormGroup>
        <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
          <Label for='firstName' className='mr-sm-2'>
            First name
          </Label>
          <Input
            type='text'
            name='first_name'
            id='firstName'
            placeholder='First name'
            value={first_name}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
          <Label for='lastName' className='mr-sm-2'>
            Last name
          </Label>
          <Input
            type='text'
            name='last_name'
            id='lastName'
            placeholder='last name'
            value={last_name}
            onChange={onChange}
          />
        </FormGroup>
        <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
          <Label for='email' className='mr-sm-2'>
            Email
          </Label>
          <Input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            value={email}
            onChange={onChange}
          />
        </FormGroup>
        <br />
        <Button className='btn-primary'> Update profile</Button>
      </Form>
    </Fragment>
  );
};

export default USerProfile;
