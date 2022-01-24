import { useEffect } from "react";
import { useRouter } from "next/router";
import { token } from "../services/auth";

const withAuth = (WrapperComponent, logged = true) => {
  const Wrapper = (props) => {
    const router = useRouter();

    useEffect(() => {
      // Pega token
      const tokenData = token();

      // Se usuários já estiverem logados, não permitem o acesso a página
      if (!logged) {
        // Se existir o token redireciona para página inicial
        if (tokenData) router.replace("/admin");
        return;
      }

      // Se existir o token
      if (tokenData) {
        return;
      }

      // Redireciona
      router.replace("/admin/login");
    }, []);
    return <WrapperComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
