import { DataGrid } from '@material-ui/data-grid';

import { useTable } from '../../hooks/useTable';

import './styles.scss'

export function Clients() {
  const { columns, rows } = useTable({type: 'clients'});

  return(
    <div id="clients-page" >
      <header>
        <h1>Painel Administrativo Clientes</h1>
        <h2>Clientes</h2>
      </header>

      <div className="separator" ></div>
      
      <main>
        <div className="section">
          <button>+<b>Novo Cliente</b></button>
          <div>
            <input type="text" placeholder="Pesquisar Cliente..." />
            <button>Pesquisar</button>
          </div>
        </div>
        
        <div className="table">
          <DataGrid rows={rows} columns={columns} pageSize={9} checkboxSelection />
        </div>
      </main>
    </div>
  );
}