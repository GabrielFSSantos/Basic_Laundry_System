import { Client } from '../models/Client';
import { clients } from '../data/data.json';

export default {
  async create(client: Client) {
    try {
      const storage = localStorage.getItem('clients');
      if(storage){
        const dados: Client[] = JSON.parse(storage);

        if(dados.find((e) => e.cpf === client.cpf)){
          alert("error Administrator Exists");
          return
        }

        dados.push(client);
        localStorage.setItem('clients', JSON.stringify(dados));
        return client;
      }
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
  
  async update() {
    try {

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

  async show() {
    try {

    } catch (error) {
      alert("Could not show.\n" + error);
    }
  },
}