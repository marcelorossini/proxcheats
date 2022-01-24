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
  Select,
  CheckBox,
  GroupButtons,
  Error,
} from "../../../../styles/admin/index";
import { UploaderImageGallery } from "../../../../components/Helpers/Uploader";

const Cliente = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [images, setImages] = useState({});

  const { id } = router.query;
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!id) return;
    if (id === "novo") return;

    const handle = async () => {
      setIsLoading(true);
      try {
        const { data } = await api.get(`/customer/${id}`);

        // Title
        setTitle(data.name);

        // Preenche valores
        Object.keys(data).forEach((item) => {
          setValue(item, data[item]);
        });

        // Preenche imagens
        setImages({
          profileImage: data.profile_image,
          backgroundImage: data.background_image,
        });
      } catch (error) {
        console.log(error);
        alertDialog({
          type: "Alert",
          title: `Erro`,
          message: `Erro, tente novamente`,
        });
      }
      setIsLoading(false);
    };
    handle();
  }, [id]);

  const handleOnSubmit = async (data) => {
    try {
      let auxData = data;
      // Imagem de perfil
      auxData.profile_image = images.profileImage || null;
      // Imagem fundo
      auxData.background_image = images.backgroundImage || null;
      if (id === "novo") await api.post(`/customer`, auxData);
      else {
        await api.put(`/customer/${id}`, auxData);
      }

      router.push("/admin/cadastro/clientes");
    } catch (error) {
      alertDialog({
        type: "Alert",
        title: `Erro`,
        message: `Erro, tente novamente`,
      });
    }
  };

  const handleOnDelete = () => {
    alertDialog({
      type: "Confirm",
      title: `Deseja excluir cliente?`,
      message: `Não será possivel reverter.`,
      confirmAction: async () => {
        try {
          await api.delete(`/customer/${id}`);
          router.replace("/admin/cadastro/clientes");
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

  const handleVisualize = () => {
    const url = getValues("url");
    window.open(`/clientes/${url}`, "_blank");
  };

  return (
    <Layout title={`Cliente: ${title}`} loading={isLoading}>
      <Form onSubmit={handleSubmit(handleOnSubmit)}>
        <GroupInput labelSize="100px">
          <Label>Empresa:</Label>
          <Select
            defaultValue="agencia"
            {...register("company", { required: true })}
          >
            <option value="agencia">Agência Clínica</option>
            <option value="plim">Plim Soluções Criativas</option>
          </Select>
          {errors.company && <Error secondary>Preencha o campo Empresa.</Error>}
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>Url:</Label>
          <Input {...register("url", { required: true })} />
          {errors.url && <Error secondary>Preencha o campo Url.</Error>}
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>Nome:</Label>
          <Input {...register("name", { required: true })} />
          {errors.name && <Error secondary>Preencha o campo Nome.</Error>}
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>Descrição:</Label>
          <Input {...register("description", { required: true })} />
          {errors.description && (
            <Error secondary>Preencha o campo Descrição.</Error>
          )}
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>Telefone:</Label>
          <Input {...register("phone")} />
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>Site:</Label>
          <Input {...register("website")} />
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>Endereço:</Label>
          <Input {...register("address")} />
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>Whatsapp:</Label>
          <Input {...register("whatsapp")} />
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>Whatsapp2:</Label>
          <Input {...register("whatsapp2")} />
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>Facebook:</Label>
          <Input {...register("facebook")} />
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>Instagram:</Label>
          <Input {...register("instagram")} />
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>LinkedIn:</Label>
          <Input {...register("linkedin")} />
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>Youtube:</Label>
          <Input {...register("youtube")} />
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label htmlFor="profile_image">Foto perfil:</Label>
          <UploaderImageGallery
            image={images.profileImage}
            showLoading={true}
            callbackUploadPreview={(data) =>
              setImages((state) => ({ ...state, profileImage: data.url }))
            }
            callbackUploadSuccess={(data) =>
              setImages((state) => ({ ...state, profileImage: data.url }))
            }
            options={{ size: 256 }}
          />
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>Foto fundo:</Label>
          <UploaderImageGallery
            image={images.backgroundImage}
            showLoading={true}
            callbackUploadPreview={(data) =>
              setImages((state) => ({ ...state, backgroundImage: data.url }))
            }
            callbackUploadSuccess={(data) =>
              setImages((state) => ({ ...state, backgroundImage: data.url }))
            }
            options={{ size: 1600 }}
          />
        </GroupInput>
        <GroupInput labelSize="100px">
          <Label>Opções:</Label>
          <CheckBox>
            <input type="checkbox" id="show" {...register("show")} />
            <Label htmlFor="show">Exibir na página inicial?</Label>
          </CheckBox>
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
          <Button
            type="button"
            widthDesktop="200px"
            onClick={() => handleVisualize()}
            secondary
            disabled={id === "novo"}
          >
            Visualizar
          </Button>
        </GroupButtons>
      </Form>
    </Layout>
  );
};

export default withAuth(Cliente);
