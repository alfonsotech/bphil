import axios from "axios";
// import filterParams from "./filterParams";

export default {
  // Gets articles from the NYT API
  getResources: function() {
    return axios.get("/api/resources");
  },
  // Gets all saved articles
  getSavedResources: function() {
    return axios.get("/api/resources");
  },
  getTrendingTopics: function() {
    return axios.get("/api/resources/trending");
  },
  getNewTopics: function() {
    return axios.get("/api/resources/new");
  },
  // Deletes the saved article with the given id
  deleteResource: function(id) {
    return axios.delete("/api/ressouces/" + id);
  },
  // Saves an article to the database
  saveResource: function(resourcesData) {
    console.log('resourcesData: from API util', resourcesData);
    return axios.post("/api/resources", resourcesData);
  },
  update: function(id) {
    return axios.put("/resources/" + id);
  }
};
