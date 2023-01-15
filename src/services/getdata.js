import axios from "../axios-config";

class GetData {
    //the HTTP requests for entries endpoint in API 
    //get all 
 getAllEntries(){
    return axios.get(`/entries`);
 }
//get by id 
 getEntryById(id){
    return axios.get(`/entries/${id}`);
 }
 // delete
 deleteEntry(id){
    return axios.delete(`/entries/${id}`);
 }
 //post
 createEntry(data){
    return axios.post(`/entries`, data);
 }
 //patch
 UpdateEntry(data){
    return axios.patch(`/entries`, data);
 }

  //the HTTP requests for categories endpoint in API 
      //get all 
 getAllCategories(){
    return axios.get(`/categories`);
 }
//get by id 
 getCategoryById(id){
    return axios.get(`/categories/${id}`);
 }
 // delete
 deleteCategory(id){
    return axios.delete(`/categories/${id}`);
 }
 //post
 createCategory(data){
    return axios.post(`/categories`, data);
 }
 //patch
 UpdateCategory(data){
    return axios.patch(`/categories`, data);
 }
}


var GetDAta = new GetData()
export default GetDAta; 