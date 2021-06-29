import { useState, FormEvent } from 'react';
import { DataGrid } from '@material-ui/data-grid';

import { Header } from '../../components/Header';
import { useTable, Rows } from '../../hooks/useTable';

import './styles.scss'

export function Clients() {
  const { columns, rows } = useTable({type: 'clients'});
  const [searchQuery, setSearchQuery] = useState('');
  const [rowsFiltered, setRowsFiltered] = useState<Rows[]>(rows);

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
          <button>+<b>Novo Cliente</b></button>
          <form onSubmit={handleToSearch}>
            <input 
              type="text" 
              placeholder="Pesquise um cliente pelo nome..." 
              onChange={event => setSearchQuery(event.target.value)} value={searchQuery}
            />
            <button type="submit">Pesquisar</button>
          </form>
        </div>
        
        <div className="table">
          <DataGrid rows={rowsFiltered} columns={columns} pageSize={9} checkboxSelection />
        </div>
      </main>
    </div>
  );
}