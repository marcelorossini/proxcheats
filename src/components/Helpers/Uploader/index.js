// NextJS
import { useState, useEffect, useRef } from "react";

// API
import api from "../../../services/api";
import axios from "axios";

// Helpers
import { alertDialog } from "../../Helpers/Alert";
import Dropzone from "react-dropzone";

// Styles
import Loading from "../../Helpers/Loading";
import { DrapAndDrop, Image, ImageGallery, ButtonUpload } from "./style";
import { CloudUpload, Trash } from "@styled-icons/bootstrap";

export const Uploader = (props) => {
  const {
    callbackUploadSuccess,
    callbackUploadPreview,
    openFileDialog,
    showLoading,
    showAlert,
    options,
    ...restOfProps
  } = props;
  const [isLoading, setIsLoading] = useState(false);
  const refDropzone = useRef();

  // Token de cancelamentodo axios
  const handleUploadProcess = async (file) => {
    setIsLoading(true);
    try {
      // Se nenhum arquivo selecionado, não continua
      if (file.length === 0) return;

      // Gera id
      const uniqueIdAux = uniqueId();

      // Variáveis
      const { name, size, type } = file[0];

      if (size > 67108864) {
        if (showAlert) {
          alertDialog({
            type: "Alert",
            title: `Não é possivel fazer o upload`,
            message: `O arquivo ultrapassa o tamanho de 64mb.`,
          });
        }
        throw new Error();
      }

      // Token de cancelamento
      const handleAxiosCancelToken = axios.CancelToken.source();

      // Preview
      const reader = new FileReader();
      reader.onload = (e) => {
        if (callbackUploadPreview)
          callbackUploadPreview({
            uniqueId: uniqueIdAux,
            name,
            size,
            type,
            url: e.target.result,
            cancelUpload: () => {
              handleAxiosCancelToken.cancel();
            },
          });
      };
      reader.readAsDataURL(file[0]);

      // Cria form data com o arquivo a ser enviado
      const formData = new FormData();
      formData.append("file", file[0]);
      if (options) formData.append("options", JSON.stringify(options));

      // Tenta enviar arquivo
      const response = await api.post("upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        cancelToken: handleAxiosCancelToken.token,
        timeout: 600000,
      });

      // Chama a props se existir
      if (callbackUploadSuccess)
        callbackUploadSuccess({ uniqueId: uniqueIdAux, ...response.data });
    } catch (error) {
      //if (callbackUploadPreview) callbackUploadPreview(null)
      console.log(error);
    }
    setIsLoading(false);
  };

  // Abre o diálogo de seleção
  useEffect(() => {
    if (!openFileDialog) return;
    refDropzone.current.open();
  }, [openFileDialog]);

  return (
    <Dropzone
      ref={refDropzone}
      {...restOfProps}
      onDrop={(acceptedFiles) => handleUploadProcess(acceptedFiles)}
    >
      {({ getRootProps, getInputProps, isDragActive }) => (
        <>
          <DrapAndDrop
            {...getRootProps()}
            isDragActive={isDragActive}
            {...restOfProps}
          >
            <input {...getInputProps()} />
            {props.children}
            {showLoading && <Loading active={isLoading} />}
          </DrapAndDrop>
        </>
      )}
    </Dropzone>
  );
};

export const uniqueId = () => {
  return "_" + Math.random().toString(36).substr(2, 9);
};

export const UploaderImageGallery = (props) => {
  const {
    image,
    callbackUploadPreview,
    callbackUploadSuccess,
    ...restOfProps
  } = props;
  const [urlImage, setUrlImage] = useState("");
  const [openDialog, setOpenDialog] = useState();

  useEffect(() => {
    if (!image) return;

    setUrlImage(image);
  }, [image]);

  return (
    <ImageGallery urlImage={urlImage}>
      <Uploader
        {...restOfProps}
        openFileDialog={openDialog}
        callbackUploadPreview={(data) => {
          setUrlImage(data.url);
          if (callbackUploadPreview) callbackUploadPreview(data);
        }}
        callbackUploadSuccess={(data) => {
          setUrlImage(data.url);
          if (callbackUploadSuccess) callbackUploadSuccess(data);
        }}
      >
        <Image urlImage={urlImage}>
          <img src={urlImage} alt="" />
        </Image>
      </Uploader>
      <ButtonUpload type="button" onClick={() => setOpenDialog([])}>
        <CloudUpload /> Carregar imagem
      </ButtonUpload>
      {urlImage && (
        <ButtonUpload
          secondary
          type="button"
          onClick={() => {
            alertDialog({
              type: "Confirm",
              title: `Deseja excluir a imagem?`,
              message: `Não será possivel reverter.`,
              confirmAction: async () => {
                setUrlImage("");
                if (callbackUploadSuccess) callbackUploadSuccess({ url: null });
              },
            });
          }}
        >
          <Trash /> Excluir imagem
        </ButtonUpload>
      )}
    </ImageGallery>
  );
};
