import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { DataGrid, GridSelectionModelChangeParams } from '@material-ui/data-grid';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { useTable, RowRequest } from '../../hooks/useTable';

import RequestController from '../../service/controllers/RequestController';

import './styles.scss'

export function Requests() {
  const history = useHistory();
  const [searchQuery, setSearchQuery] = useState('');
  const { columns, rowsRequest } = useTable({type: 'requests', search: searchQuery});
  const [rowsSelected, setRowsSelected] = useState<RowRequest[]>([]);

  async function handleToNewRequest() {
    history.push('/new/request');
  }

  async function handleToSelectedRequest(elements: GridSelectionModelChangeParams) {
    const selected = new Set(elements.selectionModel);
    setRowsSelected(rowsRequest.filter((request: RowRequest) => selected.has(request.id)));
  }
  
  async function handleToEditRequest() {
    if(rowsSelected.length > 1){
      alert("Não é possível editar mais de um pedido por vez.");
      return
    }
    if(rowsSelected.length < 1){
      alert("Selecione um pedido para editar.");
      return
    }

    history.push(`/edit/request/${rowsSelected[0].id}`);
  }

  async function handleToRemoveRequest() {
    if(rowsSelected.length < 1){
      alert("Selecione um ou mais pedidos para excluir.");
      return
    }

    let ids = '';
    rowsSelected.forEach(e => {
      ids = ids + e.id + ', ';
    })

    if(window.confirm('Deseja excluir o(s) pedido(s) '+ ids + '?')) {
      RequestController.delete(rowsSelected).then(() => {
        alert("Pedidos excluídos com sucesso!!!");
        setSearchQuery(' ');
        setSearchQuery('');
      });
    }
  }

  return(
    <div id="requests-page" >
      <Header title="Pedidos"/>
      
      <main>
        <div className="section">
          <div>
            <Button onClick={handleToNewRequest} isOutlined>✛<b>Novo Pedido</b></Button>
            <Button onClick={handleToEditRequest} isOutlined>✎<b>Editar Pedido</b></Button>
            <Button onClick={handleToRemoveRequest} isOutlined>✕<b>Excluir Pedido</b></Button>
          </div>
          <form>
            <input 
              type="text" 
              placeholder="Pesquise um pedido pelo nome..." 
              onChange={event => setSearchQuery(event.target.value)} value={searchQuery}
            />
          </form>
        </div>
        
        <div className="table">
          <DataGrid rows={rowsRequest} columns={columns} pageSize={8} checkboxSelection onSelectionModelChange={e => handleToSelectedRequest(e)}/>
        </div>
      </main>
    </div>
  );
}