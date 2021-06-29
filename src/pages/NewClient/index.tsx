import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

import './styles.scss'

export function NewClient() {
  return(
    <div id="new-client-page" >
      <Header title="Novo Cliente"/>
      
      <main>
        <div className="board">

        </div>
        <Button onClick={() => console.log('Salvando...')}>Cadastrar Cliente</Button>
      </main>
    </div>
  );
}