import SimplePaginator from "../helpers/paginator.js";
import ProductModel from "../models/product.js";
import _ from "lodash";
class ProductsController {
  async store(req, res) {
    return res.json();
  }

  async index(req, res) {
    var modelQuery = _.pick(req.query, ["featured", "company"]);
    var sortMap = new Map();
    if (req.query.sort) {
      var sorts = req.query.sort.split(",");
      sorts.forEach((s) => {
        if (s.replace("-", "") === "name") {
          sortMap.set("name", Number(s.replace("name", "1")));
        }
        if (s.replace("-", "") === "createdAt") {
          sortMap.set("createdAt", Number(s.replace("createdAt", "1")));
        }
      });
    }
    if (req.query.name) {
      modelQuery.name = {
        $regex: req.query.name,
        $options: "i",
      };
    }
    if (req.query.max_price) {
      modelQuery.price = {
        $lte: req.query.max_price,
      };
    }
    if (req.query.min_price) {
      if (!modelQuery.price) {
        modelQuery.price = {};
      }
      modelQuery.price.$gte = req.query.min_price;
    }
    if (req.query.rating) {
      modelQuery.rating = {
        $lt: Number(req.query.rating) - 1,
        $gte: Number(req.query.rating),
      };
    }
    var page = req.query.page || 1;
    var total = await ProductModel.find(modelQuery).countDocuments();
    var items_per_page = 23;
    var products = new SimplePaginator(ProductModel);
    var products = await ProductModel.find(modelQuery)
      .sort(sortMap)
      .skip((page - 1) * items_per_page)
      .limit(items_per_page);

    return res.json({
      products,
      page,
      total,
      items_per_page,
    });
  }

  async create(req, res) {
    return res.json();
  }

  async show(req, res) {
    return res.json();
  }

  async edit(req, res) {
    return res.json();
  }

  async update(req, res) {
    return res.json();
  }

  async destroy(req, res) {
    return res.json();
  }

  async view(req, res) {
    return res.json();
  }

  async grid(req, res) {
    return res.json();
  }

  async form(req, res) {
    return res.json();
  }
}

export default new ProductsController();
