import { Client } from '../models/Client';
import { clients } from '../data/data.json';

export default {
  async create(client: Client) {
    try {
      let dados: Client[] = [];
      const storage = localStorage.getItem('clients');

      if(storage){
        dados = JSON.parse(storage);
      }
      else {
        localStorage.setItem('clients', JSON.stringify(clients));
        dados = JSON.parse(JSON.stringify(clients));
      }

      if(dados.find((e) => e.cpf === client.cpf)){
        alert("error Administrator Exists");
        return
      }

      dados.push(client);
      localStorage.setItem('clients', JSON.stringify(dados));
      return client;
      
    }catch (error) {
      alert("error Administrator Exists");
   }
  },

  async read() {
    try {
      const storage = localStorage.getItem('clients');
      if(storage){
        const dados: Client[] = JSON.parse(storage);
        return dados;
      }
      else {
        localStorage.setItem('clients', JSON.stringify(clients));
        const dados: Client[] = JSON.parse(JSON.stringify(clients));
        return dados;
      }
    } catch (error) {
      alert("Could not list.\n" + error);
    }
  },
  
  async update(client: Client) {
    try {
      let dados: Client[] = [];
      const storage = localStorage.getItem('clients');

      if(storage){
        dados = JSON.parse(storage);
      }
      else {
        localStorage.setItem('clients', JSON.stringify(clients));
        dados = JSON.parse(JSON.stringify(clients));
      }

      const elem = dados.findIndex((e) => e.id === client.id);

      if(elem){
        dados[elem] = client;
        localStorage.setItem('clients', JSON.stringify(dados));
        return client;
      }
      else {
        alert("error Administrator Exists");
        return
      }
      
    } catch (error) {
      alert("Could not update.\n" + error);
    }
  },
  
  async delete() {
    try {

    } catch (error) {
      alert("don't was not possible to delete.\n" + error);
    }
  },

  async show(id: string) {
    try {
      let dados: Client[] = [];
      const storage = localStorage.getItem('clients');

      if(storage){
        dados = JSON.parse(storage);
      }
      else {
        localStorage.setItem('clients', JSON.stringify(clients));
        dados = JSON.parse(JSON.stringify(clients));
      }

      const client = dados.find((e) => e.id === id);

      if(client){
        return client;
      }
      else{
        alert("error Administrator Exists");
        return
      }
    } catch (error) {
      alert("Could not show.\n" + error);
    }
  },
}