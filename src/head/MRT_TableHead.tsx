import React, { FC } from 'react';
import { LinearProgress, TableHead } from '@mui/material';
import { MRT_TableHeadRow } from './MRT_TableHeadRow';
import { useMaterialReactTable } from '../useMaterialReactTable';
import { MRT_TablePagination } from '../footer/MRT_TablePagination';

interface Props {}

export const MRT_TableHead: FC<Props> = () => {
  const {
    tableInstance,
    muiTableHeadProps,
    enablePagination,
    isFetching,
    positionPagination,
  } = useMaterialReactTable();

  return (
    <TableHead {...muiTableHeadProps}>
      {isFetching && <LinearProgress />}
      {enablePagination &&
        ['top', 'both'].includes(positionPagination ?? '') && (
          <MRT_TablePagination />
        )}
      {tableInstance.headerGroups.map((headerGroup, index) => (
        <MRT_TableHeadRow
          key={`${index}-${headerGroup.id}`}
          headerGroup={headerGroup}
        />
      ))}
    </TableHead>
  );
};
