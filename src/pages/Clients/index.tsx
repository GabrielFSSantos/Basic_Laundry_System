import { useEffect, useState, FormEvent } from 'react';
import { DataGrid } from '@material-ui/data-grid';

import { useTable } from '../../hooks/useTable';

import './styles.scss'

type Rows = { 
  id: number;
  cpf?: string;
  name?: string;
  phone?: string; 
  email?: string;
  requestNumber?: string;
  status?: string;
}

export function Clients() {
  const { columns, rows } = useTable({type: 'clients'});
  const [searchQuery, setSearchQuery] = useState('');
  const [rowsFiltered, setRowsFiltered] = useState<Rows[]>(rows);
  //let rowsFiltered = rows;

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

    console.log('handleToSearch', searchQuery, rowsFiltered);
  }

  useEffect(() => {
    console.log('useEffect', searchQuery, rowsFiltered);
  }, [rowsFiltered]);


  return(
    <div id="clients-page" >
      <header>
        <h1>Painel Administrativo</h1>
        <h2>Clientes</h2>
      </header>

      <div className="separator" ></div>
      
      <main>
        <div className="section">
          <button>+<b>Novo Cliente</b></button>
          <form onSubmit={handleToSearch}>
            <input 
              type="text" 
              placeholder="Pesquisar Cliente..." 
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