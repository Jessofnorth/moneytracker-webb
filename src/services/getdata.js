import axios from "../axios-config";

class GetData {
  //the HTTP requests for entries endpoint in API
  //get all
  async getAllEntries() {
    return await axios.get(`/entries`);
  }
  //get by id
  async getEntryById(id) {
    return await axios.get(`/entries/${id}`);
  }
  // delete
  async deleteEntry(id) {
    return await axios.delete(`/entries/${id}`);
  }
  //post
  async createEntry(data) {
    return await axios.post(`/entries`, data);
  }
  //patch
  async UpdateEntry(data) {
    return await axios.patch(`/entries`, data);
  }

  //the HTTP requests for categories endpoint in API
  //get all
  async getAllCategories() {
    return await axios.get(`/categories`);
  }
  //get by id
  async getCategoryById(id) {
    return await axios.get(`/categories/${id}`);
  }
  // delete
  async deleteCategory(id) {
    return await axios.delete(`/categories/${id}`);
  }
  //post
  async createCategory(data) {
    return await axios.post(`/categories`, data);
  }
  //patch
  async UpdateCategory(data) {
    return await axios.patch(`/categories`, data);
  }
}

var GetDAta = new GetData();
export default GetDAta;
