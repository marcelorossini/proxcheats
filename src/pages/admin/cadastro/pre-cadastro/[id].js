/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import api from "../../../../services/api";
import withAuth from "../../../../utils/withAuth";

import Layout from "../../../../components/Layout";
import { alertDialog } from "../../../../components/Helpers/Alert";
import {
  Form,
  Input,
  Button,
  Label,
  GroupInput,
  GroupButtons,
  Select,
  Error,
} from "../../../../styles/admin/index";

const Cliente = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");

  const { id } = router.query;
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!id) return;
    if (id === "novo") return;

    const handle = async () => {
      setIsLoading(true);
      try {
        const { data } = await api.get(`/pre-registration/${id}`);

        // Title
        setTitle(data.name);

        // Preenche valores
        Object.keys(data).forEach((item) => {
          setValue(item, data[item]);
        });
      } catch (error) {
        console.log(error);
        alert("Erro, por favor tente novamente");
      }
      setIsLoading(false);
    };
    handle();
  }, [id]);

  const handleOnDelete = () => {
    alertDialog({
      type: "Confirm",
      title: `Deseja excluir cliente?`,
      message: `Não será possivel reverter.`,
      confirmAction: async () => {
        try {
          await api.delete(`/pre-registration/${id}`);
          router.replace("/admin/cadastro/pre-cadastro");
        } catch (error) {
          alertDialog({
            type: "Alert",
            title: "Ops... Algo deu errado.",
            message: error.response.data.message,
          });
        }
      },
    });
  };

  const handleOnSubmit = async (data) => {
    try {
      await api.put(`/pre-registration/${id}`, { status: data.status });
      router.push("/admin/cadastro/pre-cadastro");
    } catch (error) {
      alertDialog({
        type: "Alert",
        title: `Erro`,
        message: `Erro, tente novamente`,
      });
    }
  };

  return (
    <Layout title={`Pré-cadastro: ${title}`} loading={isLoading}>
      <Form onSubmit={handleSubmit(handleOnSubmit)}>
        <GroupInput labelSize="100px">
          <Label>Nome:</Label>
          <Input {...register("name")} readOnly={true} />
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>Whatsapp:</Label>
          <Input {...register("whatsapp")} readOnly={true} />
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>Email:</Label>
          <Input {...register("email")} readOnly={true} />
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>Status:</Label>
          <Select defaultValue="Pendente" {...register("status", { required: true })}>
            <option value=""></option>
            <option value="Pendente">Pendente</option>
            <option value="Reunião Marcada">Reunião Marcada</option>
            <option value="Contrato fechado">Contrato fechado</option>
            <option value="Não fechou">Não fechou</option>
            <option value="Aguardando resposta">Aguardando resposta</option>
          </Select>
          {errors.status && <Error secondary>Preencha o campo Status.</Error>}
        </GroupInput>
        <GroupButtons gap="12px">
          <Button type="submit" widthDesktop="200px">
            Salvar
          </Button>
          <Button
            type="button"
            widthDesktop="200px"
            onClick={() => handleOnDelete()}
            danger
            disabled={id === "novo"}
          >
            Excluir
          </Button>
        </GroupButtons>
      </Form>
    </Layout>
  );
};

export default withAuth(Cliente);
