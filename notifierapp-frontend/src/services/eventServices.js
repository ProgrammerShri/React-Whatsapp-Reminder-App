import http from "../apis/api";
class shopDataServices {
  getAll() {
    return http.get("/shops");
  }
  get(id) {
    return http.get(`/shops/${id}`);
  }
  create(data) {
    return http.post("/shops", data);
  }
  update(data) {
    const { id } = data;
    return http.put(`/shops/${id}`, data);
  }
  delete(id) {
    return http.delete(`/shops/${id}`);
  }
  deleteAll() {
    return http.delete(`/shops`);
  }
  findByTitle(title) {
    return http.get(`/shops?title=${title}`);
  }
}
export default new shopDataServices();