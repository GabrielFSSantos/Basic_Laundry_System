import { DataGrid } from '@material-ui/data-grid';

import { useTable } from '../../hooks/useTable';

import './styles.scss'

export function Requests() {
  const { columns, rows } = useTable({type: 'requests'});

  return(
    <div id="requests-page" >
      <header>
        <h1>Painel Administrativo</h1>
        <h2>Pedidos</h2>
      </header>

      <div className="separator" ></div>
      
      <main>
        <div className="section">
          <button>+<b>Novo Pedido</b></button>
          <div>
            <input type="text" placeholder="Pesquisar Pedido..." />
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