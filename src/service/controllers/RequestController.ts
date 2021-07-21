import { Request } from '../models/Request';
import { requests } from '../data/data.json';

export default {
  async create(request: Request) {
    try {
      let dados: Request[] = [];
      const storage = localStorage.getItem('requests');

      if(storage){
        dados = JSON.parse(storage);
      }
      else {
        localStorage.setItem('requests', JSON.stringify(requests));
        dados = JSON.parse(JSON.stringify(requests));
      }

      if(dados.find((e) => e.cpf === request.cpf)){
        alert("error Request Exists");
        return
      }

      dados.push(request);
      localStorage.setItem('requests', JSON.stringify(dados));
      return request;
      
    }catch (error) {
      alert("error Request Exists");
   }
  },

  async read() {
    try {
      const storage = localStorage.getItem('requests');
      if(storage){
        const dados: Request[] = JSON.parse(storage);
        return dados;
      }
      else {
        localStorage.setItem('requests', JSON.stringify(requests));
        const dados: Request[] = JSON.parse(JSON.stringify(requests));
        return dados;
      }
    } catch (error) {
      alert("Could not list.\n" + error);
    }
  },
  
  async update(request: Request) {
    try {
      let dados: Request[] = [];
      const storage = localStorage.getItem('requests');

      if(storage){
        dados = JSON.parse(storage);
      }
      else {
        localStorage.setItem('requests', JSON.stringify(requests));
        dados = JSON.parse(JSON.stringify(requests));
      }

      const index = dados.findIndex((e) => e.id === request.id);

      if(index >= 0){
        dados[index] = request;
        localStorage.setItem('requests', JSON.stringify(dados));
        return request;
      }
      else {
        alert("error Request Exists");
        return
      }
      
    } catch (error) {
      alert("Could not update.\n" + error);
    }
  },
  
  async delete(elements: {id: string}[]) {
    try {
      let dados: Request[] = [];
      const storage = localStorage.getItem('requests');

      if(storage){
        dados = JSON.parse(storage);
      }
      else {
        localStorage.setItem('requests', JSON.stringify(requests));
        dados = JSON.parse(JSON.stringify(requests));
      }

      elements.map((element) => {
        const index = dados.findIndex((e) => e.id === element.id);
        if(index >= 0){
          dados.splice(index, 1);
          localStorage.setItem('requests', JSON.stringify(dados));
        }
        else {
          alert(`error Request ${index} no exists!`);
        }
      });
    } catch (error) {
      alert("don't was not possible to delete.\n" + error);
    }
  },

  async show(id: string) {
    try {
      let dados: Request[] = [];
      const storage = localStorage.getItem('requests');

      if(storage){
        dados = JSON.parse(storage);
      }
      else {
        localStorage.setItem('requests', JSON.stringify(requests));
        dados = JSON.parse(JSON.stringify(requests));
      }

      const request = dados.find((e) => e.id === id);

      if(request){
        return request;
      }
      else{
        alert("error Request Exists");
        return
      }
    } catch (error) {
      alert("Could not show.\n" + error);
    }
  },
}