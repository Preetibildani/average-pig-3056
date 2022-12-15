import React, { useState, useEffect } from "react";
import { AiFillApple } from "react-icons/ai"; // FcGoogle
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SignUpFunction } from "../../Redux/SignUpReducer/action";
import { ArrowBackIcon } from "@chakra-ui/icons";

import logo from "../../Images/Logo.png";

import {
  Image,
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  Heading,
  Input,
  Spinner,
  Select,
  Text,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";

export default function CreateAccount() {
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [surname, setSurname] = useState("");

  const GotoHome = () => {
    navigate("/");
  };
  const { userData, successfullyCreated, createAccountError } = useSelector(
    (state) => {
      return {
        userData: state.signUpReducer.userData,
        successfullyCreated: state.signUpReducer.successfullyCreated,
        createAccountError: state.signUpReducer.createAccountError,
      };
    },
    shallowEqual
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toaster = useToast();
  const [isLargerThan992] = useMediaQuery("(min-width: 992px)");

  useEffect(() => {
    if (successfullyCreated) {
      toaster({
        title: `Your Account Has Created `,
        duration: 2000,
        position: "top",
        status: "success",
        isClosable: true,
      });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  }, [successfullyCreated]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (createAccountError) {
      toaster({
        title: `Something Error Occourd !`,
        status: "error",
        duration: 2000,
        position: "top",
        isClosable: true,
      });
    }
  }, [createAccountError]);

  function SendSignInRequest() {
    dispatch(
      SignUpFunction({
        sname: surname,
        fname: userName,
        password: password,
        email: email,
      })
    );
    setEmail("");
    setPassword("");
    setUserName("");
    setSurname("");
  }

  return (
    <>
      {isLoading ? (
        <Flex justify="center" mt={"5"}>
          <Spinner
            thickness="5px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue"
            size="lg"
          />
        </Flex>
      ) : (
        <>
          <Flex border="1px" color="black" alignItems="center">
            <ArrowBackIcon color="blue" boxSize={6} onClick={GotoHome} />
            <Image marginLeft="41%" boxSize="16%" src={logo} alt="" />
          </Flex>

          <Flex
            justify="center"
            align="center"
            direction="column"
            textAlign="left"
          >
            <Heading mt="10" as="h2" size="lg">
              Create an account
            </Heading>

            <FormControl
              w={isLargerThan992 ? "34%" : "70%"}
              borderRadius="lg"
              p={"3"}
              cursor="pointer"
              mt={5}
              isRequired
            >
              <Input
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" Email address"
                w={"100%"}
                h={"40px"}
                value={email}
                border={`2px solid`}
                type={"email"}
                id="email"
              />
              <br />

              <br />
              {/* Name */}

              <Input
                onChange={(e) => setUserName(e.target.value)}
                placeholder="First name"
                value={userName}
                w={"100%"}
                h={"40px"}
                border={`2px solid`}
                type={"text"}
                mb={"8px"}
                id="userName"
              />
              <br />
              <br />

              <Input
                onChange={(e) => setSurname(e.target.value)}
                placeholder="Surname"
                value={surname}
                w={"100%"}
                h={"40px"}
                border={`2px solid`}
                type={"text"}
                mb={"8px"}
                id="userName"
              />
              {/* email */}

              {/* UserType */}

              {/* password */}
              <FormLabel htmlFor="password">Enter Password</FormLabel>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                w={"100%"}
                h={"40px"}
                value={password}
                border={`2px solid`}
                type={"password"}
                mb={"8px"}
                id="password"
              />
              <Checkbox size={"lg"} defaultChecked>
                Keep me signed in
              </Checkbox>
              <br />
              <FormHelperText fontSize={"12px"} mb={"8px"}>
                Selecting this checkbox will keep you signed into your account
                on this device until you sign out. Do not select this on shared
                devices.{" "}
                <Checkbox size={"lg"} defaultChecked>
                  <FormHelperText fontSize={"14px"} mb={"8px"}>
                    I'd like to receive travel deals, special offers and other
                    information from Expedia via email.
                  </FormHelperText>
                </Checkbox>
                <span style={{ color: "blue", cursor: "pointer" }}>
                  Terms and Conditions, Privacy Statement
                </span>{" "}
                and <span style={{ color: "blue", cursor: "pointer" }}></span>
              </FormHelperText>

              <Button
                onClick={SendSignInRequest}
                w={"100%"}
                h={"40px"}
                mt={4}
                colorScheme="blue"
                type="submit"
                disabled={email === "" || password === "" || userName === ""}
              >
                Create Account
              </Button>

              <Text mt={"15px"} display="flex" justifyContent={"center"}>
                <Link to={""} style={{ color: "blue" }}>
                  Forgot password?
                </Link>
              </Text>

              <Text mt={"15px"} display="flex" justifyContent={"center"}>
                Already have an account?
                <Link to={"/login"} style={{ color: "blue" }}>
                  Sign In
                </Link>
              </Text>

              <Text mt={"25px"} display="flex" justifyContent={"center"}>
                or continue with
              </Text>
              <Box mt={"10px"} display="flex" justifyContent={"center"}>
                <AiFillApple
                  size={"25px"}
                  style={{ marginRight: "10px", cursor: "pointer" }}
                />
                <FcGoogle
                  size={"25px"}
                  style={{ marginRight: "10px", cursor: "pointer" }}
                />
                <AiFillFacebook
                  size={"25px"}
                  style={{ marginRight: "10px", cursor: "pointer" }}
                  color={"blue"}
                />
              </Box>
            </FormControl>
          </Flex>
        </>
      )}
    </>
  );
}
