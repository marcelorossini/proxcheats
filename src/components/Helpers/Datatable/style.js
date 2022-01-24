import styled from "styled-components";
import DataTable from "react-data-table-component";

export const Container = styled(DataTable)`
  & .rdt_TableCol {
    font-size: 16px;
    font-weight: bold;
    color: var(--color-primary);
  }

  & .rdt_TableCell {
    font-size: 14px;
    cursor: pointer;
    color: var(--color-text-primary);
  }
  & .rdt_TableHeadRow {
    min-height: 0px;
    padding-bottom: 20px;
  }

  & .rdt_TableCol_Sortable {
    color: var(--color-primary);
  }
`;

export const Empty = styled.div`
  min-height: 100px;
  cursor: pointer;
`;
