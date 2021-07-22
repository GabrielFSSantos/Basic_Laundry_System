import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Toggle } from '../../components/Toggle';

import './styles.scss'

export function NewRequest() {
  const history = useHistory();

  const [cpf, setCpf] = useState('');
  const [type, setType] = useState('');
  const [price, setPrice] = useState(0);
  const [weight, setWeight] = useState(0);
  const [isPaid, setIsPaid] = useState(false);
  const [isDelivery, setIsDelivery] = useState(false);

  return(
    <div id="new-request-page" >
      <Header title="Novo Pedido"/>
      
      <main>
        <div className="board">
        <form>
            <div className="requestInfos">
              <div>
                <b>CPF</b>
                <input 
                  type="text" 
                  placeholder="Digite o CPF do cliente..."
                  onChange={event => setCpf(event.target.value)} 
                />
                <b>Tipo de Lavagem</b>
                <select
                  placeholder="Selecione o tipo de lavagem..."
                  onChange={event => setType(event.target.value)}
                >
                  <option value="volvo">À máquina</option>
                  <option value="saab">À mão</option>
                  <option value="mercedes">À seco</option>
                </select>
                <b>Preço</b>
                <span>R$</span>
              </div>

              <div>
                <b>Peso(kg)</b>
                <input 
                  type="text" 
                  placeholder="Digite o Peso das roupas..."
                  onChange={event => setWeight(parseFloat(event.target.value))} 
                />
                <div className="toggles">
                  <Toggle title="Entregar"/>
                  <Toggle title="Pago"/>
                </div>
              </div>
            </div>
          </form>
        </div>
        <Button onClick={() => console.log('Salvando...')}>Cadastrar Pedido</Button>
      </main>
    </div>
  );
}