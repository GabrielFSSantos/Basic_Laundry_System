import { useEffect, useState } from 'react';
import ClientController from '../service/controllers/ClientController';
import RequestController from '../service/controllers/RequestController';

type TableProps = {
  type: string;
  search: string;
}

type Columns = {
  field: string;
  headerName?: string;
  description?: string;
  width?: number;
  flex?: number;
  hide?: boolean;
  sortable?: boolean;
  resizable?: boolean;
  editable?: boolean;
  hideSortIcons?: boolean;
  disableColumnMenu?: boolean;
  filterable?: boolean;
}

export type RowClient = { 
  id: string;
  cpf?: string;
  name?: string;
  phone?: string; 
  email?: string;
}

export type RowRequest = { 
  id: string;
  name?: string;
  weight?: string;
  price?: string;
  isPaid?: boolean;
  status?: string;
}

export function useTable({type, search}: TableProps) {
  const [columns, setColumns] = useState<Columns[]>([]);
  const [rowsClient, setRowsClient] = useState<RowClient[]>([]);
  const [rowsRequest, setRowsRequest] = useState<RowRequest[]>([]);

  useEffect(() => {
    if(type === 'clients') {
      setColumns([
        { field: 'name', headerName: 'Nome', width: 300 },
        { field: 'cpf', headerName: 'CPF', width: 250 },
        { field: 'phone', headerName: 'Telefone', width: 250 },
        { field: 'email', headerName: 'Email', width: 300}
      ]);
      ClientController.read().then((clients) => { if(clients){
        if(search.trim() === '') {
          setRowsClient(clients);
        }
        else {
          setRowsClient(clients.filter((client) => {
            if(client.name){
              return client.name.includes(search);
            }
            else return false;
          }));
        }
      }});
    } 
    else if(type === 'requests') {
      setColumns([
        { field: 'id', headerName: 'Código', width: 200 },
        { field: 'name', headerName: 'Nome', width: 200 },
        { field: 'weight', headerName: 'Peso', width: 200 },
        { field: 'price', headerName: 'Preço', width: 200 },
        { field: 'isPaid', headerName: 'Pago', width: 200 },
        { field: 'status', headerName: 'Status', width: 200 },
      ]);
      
      RequestController.read().then((requests) => { if(requests){
        if(search.trim() === '') {
          setRowsRequest(requests);
        }
        else {
          setRowsRequest(requests.filter((request) => {
            if(request.name){
              return request.name.includes(search);
            }
            else return false;
          }));
        }
      }});
    }
  }, [type, search]);

  return {columns, rowsClient, rowsRequest};
}