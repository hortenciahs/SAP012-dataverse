import { filterBy } from "../src/dataFunctions";
import { data as d } from "./data.js";

describe("testes de filtro", () => {
  test.only("por categoria de artesanato", () => {
    const filteredData = filterBy(d, "categoriaHobby", "artesanato");
    expect(filteredData.length).toBe(1);
  });
});
