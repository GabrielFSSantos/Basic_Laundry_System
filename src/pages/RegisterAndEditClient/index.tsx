import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import { Header } from '../../components/Header';
import { LabelInput } from '../../components/LabelInput';
import { Button } from '../../components/Button';

import { Client } from '../../service/models/Client';
import ClientController from '../../service/controllers/ClientController';

import './styles.scss'

type ClientParams = {
  id: string;
}

export function RegisterAndEditClient() {
  const history = useHistory();
  const params = useParams<ClientParams>();

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState(0);
  const [district, setDistrict] = useState('');
  const [complement, setComplement] = useState('');

  useEffect(() => {
    if(params.id){
      ClientController.show(params.id).then((dados) => {
        if (dados) {
          setId(dados.id);
          setName(dados.name);
          setCpf(dados.cpf);
          setEmail(dados.email);
          setPhone(dados.phone);
          setCep(dados.cep);
          setCity(dados.city);
          setState(dados.state);
          setStreet(dados.street);
          setNumber(dados.number);
          setDistrict(dados.district);
          setComplement(dados.complement);
        }
        else{
          history.push('/clients');
        }
      });
    }
  },[params, history]);

  function handleChangeClient(){
    
    if(name !== '' && cpf !== '' && email !== '' && 
      phone !== '' && cep !== '' && city !== '' && 
      state !== '' && street !== '' && number !== null && 
      district !== '' && complement !== '') {
        
      const client: Client = {
      id: id === '' ? uuid() : id,
      name,
      cpf,
      email,
      phone,
      cep,
      city,
      state,
      street,
      number,
      district,
      complement
      }

      if(params.id) {
        ClientController.update(client).then((dados) => {
          alert("Cliente "+dados?.name+" Editado com sucesso!!!");
          history.push('/clients');
        });
      }
      else {
        ClientController.create(client).then((dados) => {
          alert("Cliente "+dados?.name+" cadastrado com sucesso!!!");
          history.push('/clients');
        });
      }
    }
    else{
      alert("Preencha todos os campos");
    }
  }

  return(
    <div id="register-and-edit-client" >
      <Header title={params.id ? "Editar Cliente" : "Novo Cliente"}/>
      
      <main>
        <div className="board">
          <form>
            <div className="Infos">
              <div>
                <LabelInput 
                  name="Nome"
                  type="text" 
                  onChange={event => setName(event.target.value)}
                  placeholder="Digite o nome do cliente..."
                  value={name !== '' ? name : undefined}
                />

                <LabelInput 
                  name="E-mail"
                  type="text" 
                  onChange={event => setEmail(event.target.value)}
                  placeholder="Digite o email do cliente..."
                  value={email !== '' ? email : undefined}
                />
              </div>

              <div>
                <LabelInput 
                  name="CPF"
                  type="text" 
                  onChange={event => setCpf(event.target.value)}
                  placeholder="Digite o CPF do cliente..."
                  value={cpf !== '' ? cpf : undefined}
                />

                <LabelInput 
                  name="Telefone"
                  type="text" 
                  onChange={event => setPhone(event.target.value)}
                  placeholder="Digite o telefone do cliente..."
                  value={phone !== '' ? phone : undefined}
                />
              </div>
            </div>

            <h2>Endereço</h2>
            <div className="Infos">
              <div>
                <LabelInput 
                  name="CEP"
                  type="text" 
                  onChange={event => setCep(event.target.value)}
                  placeholder="Digite o CEP do cliente..."
                  value={cep !== '' ? cep : undefined}
                />

                <LabelInput 
                  name="Rua"
                  type="text" 
                  onChange={event => setStreet(event.target.value)}
                  placeholder="Digite o rua do cliente..."
                  value={street !== '' ? street : undefined}
                />

                <LabelInput 
                  name="Complemento"
                  type="text" 
                  onChange={event => setComplement(event.target.value)}
                  placeholder="Digite o complemento do endereço..."
                  value={complement !== '' ? complement : undefined}
                />
              </div>

              <div>
                <LabelInput 
                  name="Cidade"
                  type="text" 
                  onChange={event => setCity(event.target.value)}
                  placeholder="Digite o cidade do cliente..."
                  value={city !== '' ? city : undefined}
                />

                <LabelInput 
                  name="Número"
                  type="text" 
                  onChange={event => setNumber(parseFloat(event.target.value))}
                  placeholder="Digite o número do cliente..."
                  value={number !== 0 ? number : undefined}
                />
              </div>

              <div>
                <LabelInput 
                  name="Estado"
                  type="text" 
                  onChange={event => setState(event.target.value)}
                  placeholder="Digite o estado do cliente..."
                  value={state !== '' ? state : undefined}
                />

                <LabelInput 
                  name="Bairro"
                  type="text" 
                  onChange={event => setDistrict(event.target.value)}
                  placeholder="Digite o bairro do cliente..."
                  value={district !== '' ? district : undefined}
                />
              </div>
            </div>
          </form>
        </div>
        <Button onClick={handleChangeClient}>{params.id ? "Salvar Alterações" : "Cadastrar Cliente"}</Button>
      </main>
    
    </div>
  );
}
