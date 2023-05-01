import product from "../app/models/product.js";
import connector from "./connector.js";

const start = async () => {
  try {
    const jsonProducts = await import("../products.json", {
      assert: {
        type: "json",
      },
    });
    product.deleteMany({});
    console.log({ jsonProducts: jsonProducts.default });
    await connector.mongo();
    var result = await product.insertMany(jsonProducts.default);
    console.log({ result });
  } catch (error) {
    console.log(error);
  }
};
start();
