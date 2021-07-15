import { useState } from 'react';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Client } from '../../service/models/Client';

import './styles.scss'

export function NewClient() {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState(0);
  const [district, setDistrict] = useState('');
  const [complement, setComplement] = useState('');

  function handleRegisterClient(){
    const client: Client = {
      name,
      cpf,
      email,
      cep,
      city,
      state,
      street,
      number,
      district,
      complement
    }

    console.log(client);
  }

  return(
    <div id="new-client-page" >
      <Header title="Novo Cliente"/>
      
      <main>
        <div className="board">
          <form>
            <div className="clientInfos">
              <div>
                <b>Nome</b>
                <input 
                  type="text" 
                  placeholder="Digite o nome do cliente..."
                  onChange={event => setName(event.target.value)} 
                />
                <b>E-mail</b>
                <input 
                  type="text" 
                  placeholder="Digite o email do cliente..."
                  onChange={event => setEmail(event.target.value)} 
                />
              </div>

              <div>
                <b>CPF</b>
                <input 
                  type="text" 
                  placeholder="Digite o CPF do cliente..."
                  onChange={event => setCpf(event.target.value)} 
                />
              </div>
            </div>

            <h2>Endereço</h2>
            <div className="clientInfos">
              
              <div>
                <b>CEP</b>
                <input 
                  type="text" 
                  placeholder="Digite o CEP do cliente..."
                  onChange={event => setCep(event.target.value)} 
                />
                <b>Rua</b>
                <input 
                  type="text" 
                  placeholder="Digite a rua do cliente..."
                  onChange={event => setStreet(event.target.value)} 
                />
                <b>Complemento</b>
                <input 
                  type="text" 
                  placeholder="Digite a complemento do cliente..."
                  onChange={event => setComplement(event.target.value)} 
                />
              </div>

              <div>
                <b>Cidade</b>
                <input 
                  type="text" 
                  placeholder="Digite o cidade do cliente..."
                  onChange={event => setCity(event.target.value)} 
                />
                <b>Número</b>
                <input 
                  type="text" 
                  placeholder="Digite a número do cliente..."
                  onChange={event => setNumber(parseFloat(event.target.value))} 
                />
              </div>

              <div>
                <b>Estado</b>
                <input 
                  type="text" 
                  placeholder="Digite o estado do cliente..."
                  onChange={event => setState(event.target.value)} 
                />
                <b>Bairro</b>
                <input 
                  type="text" 
                  placeholder="Digite a bairro do cliente..."
                  onChange={event => setDistrict(event.target.value)} 
                />
              </div>
            </div>
          </form>
        </div>
        <Button onClick={handleRegisterClient}>Cadastrar Cliente</Button>
      </main>
    </div>
  );
}