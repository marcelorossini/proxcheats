import { useRouter } from "next/router";

import { Container, Empty } from "./style";

const Datatable = (props) => {
  const router = useRouter();

  const handleRowClick = (id = "") => {
    router.push(`${router.pathname}/${id || "novo"}`);
  };

  return (
    <Container
      noHeader={true}
      noDataComponent={
        <Empty onClick={() => handleRowClick()}>
          Nenhum registro, clique aqui para adicionar
        </Empty>
      }
      onRowClicked={(data) => handleRowClick(data.id)}
      {...props}
    />
  );
};

export default Datatable;
