import http from "../apis/api";
class eventDataServices {
  getAll() {
    return http.get("/events");
  }
  get(id) {
    return http.get(`/events/${id}`);
  }
  create(data) {
    return http.post("/events", data);
  }
  update(data) {
    const { id } = data;
    return http.put(`/events/${id}`, data);
  }
  delete(id) {
    return http.delete(`/events/${id}`);
  }
  deleteAll() {
    return http.delete(`/events`);
  }
  findByTitle(title) {
    return http.get(`/events?title=${title}`);
  }
}
export default new eventDataServices();