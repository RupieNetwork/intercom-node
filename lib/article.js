export default class Article {
  constructor(client) {
    this.client = client;
  }
  update(params, f) {
    return this.client.post('/articles', params, f);
  }
  find(params, f) {
    if (params.id) {
      return this.client.get(`/articles/${params.id}`, {}, f);
    } else if (params.user_id) {
      return this.client.get('/articles', { user_id: params.user_id }, f);
    }
  }
  delete(params, f) {
    return this.client.delete(`/articles/${params.id}`, {}, f);
  }
  convert(params, f) {
    return this.client.post('/articles/convert', params, f);
  }
}
