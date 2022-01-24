import withAuth from "../../utils/withAuth";

import Layout from "../../components/Layout";

const Admin = () => {
  return <Layout title="Home">Olá, Aryane Toffetti!</Layout>;
};

export default withAuth(Admin);
