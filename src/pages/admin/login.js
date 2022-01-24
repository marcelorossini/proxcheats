import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import {
  Button,
  Form,
  Input,
  Error,
  GroupInput,
} from "../../styles/admin/index";
import { Wrapper, Box, Logo } from "../../styles/admin/login";

import api from "../../services/api";
import withAuth from "../../utils/withAuth";

import { login } from "../../services/auth";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    setError("");
    try {
      const response = await api.post(`/login`, data);
      login(response.data);
      router.replace("/admin");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <Wrapper>
      <Box>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Logo src="/assets/logo.svg" alt="logo" />
          <GroupInput>
            <Input
              height="50px"
              type="text"
              placeholder="Usuário"
              alternative
              {...register("email")}
            />
          </GroupInput>
          <GroupInput>
            <Input
              height="50px"
              type="password"
              placeholder="Senha"
              alternative
              {...register("password")}
            />
          </GroupInput>
          <Button>Login</Button>
          <Error>{error}</Error>
        </Form>
      </Box>
    </Wrapper>
  );
};

export default withAuth(Login, false);
