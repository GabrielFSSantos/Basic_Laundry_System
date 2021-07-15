import { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import { DataGrid, GridSelectionModelChangeParams } from '@material-ui/data-grid';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { useTable, Row } from '../../hooks/useTable';

import './styles.scss'

export function Clients() {
  const history = useHistory();
  const { columns, rows } = useTable({type: 'clients'});
  const [searchQuery, setSearchQuery] = useState('');
  const [rowsFiltered, setRowsFiltered] = useState<Row[]>(rows);
  const [rowsSelected, setRowsSelected] = useState<Row[]>([]);

  async function handleToNewClient() {
    history.push('/new/client');
  }

  async function handleToSelectedClient(elements: GridSelectionModelChangeParams) {
    const s = new Set(elements.selectionModel);
    setRowsSelected(rows.filter(e => s.has(e.id)));
  }
  
  async function handleToEditClient() {
    if(rowsSelected.length > 1){
      alert("Não é possível editar mais de um cliente por vez.");
      return
    }
    if(rowsSelected.length < 1){
      alert("Selecione um cliente para editar.");
      return
    }

    console.log(rowsSelected);
  }

  async function handleToRemoveClient() {
    if(rowsSelected.length < 1){
      alert("Selecione um ou mais clientes para excluir.");
      return
    }

    let names = '';
    rowsSelected.forEach(e => {
      names = names + e.name + ', ';
    })
    alert('Deseja excluir os clientes '+ names + '?');
  }

  function handleToSearch(event: FormEvent) {
    event.preventDefault();
    
    setRowsFiltered([]);

    if(searchQuery.trim() === '') {
      setRowsFiltered(rows);
    }
    else {
      setRowsFiltered(rows.filter((client) => {
        if(client.name){
         return client.name.includes(searchQuery);
        }
        else return false;
      }));
    }
  }

  return(
    <div id="clients-page" >
      <Header title="Clientes"/>

      <main>
        <div className="section">
          <div>
            <Button onClick={handleToNewClient} isOutlined>✛<b>Novo Cliente</b></Button>
            <Button onClick={handleToEditClient} isOutlined>✎<b>Editar Cliente</b></Button>
            <Button onClick={handleToRemoveClient} isOutlined>✕<b>Excluir Cliente</b></Button>
          </div>
          <form onSubmit={handleToSearch}>
            <input 
              type="text" 
              placeholder="Pesquise um cliente pelo nome..." 
              onChange={event => setSearchQuery(event.target.value)} value={searchQuery}
            />
            <Button type="submit">Pesquisar</Button>
          </form>
        </div>
        
        <div className="table">
          <DataGrid rows={rowsFiltered} columns={columns} pageSize={9} checkboxSelection onSelectionModelChange={e => handleToSelectedClient(e)}/>
        </div>
      </main>
    </div>
  );
}