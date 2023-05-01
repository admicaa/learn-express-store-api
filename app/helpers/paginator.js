export default class SimplePaginator {
  constructor(model) {
    this.model = model;
    this.model.paginate = this.paginate;
    return this.model;
  }
  paginate(req) {
    var page = req.query.page || 1;
    var items_per_page = 10;
    return this.model.skip((page - 1) * items_per_page).limit(items_per_page);
  }
}
