import { h, text, patch } from "../src/index.js"
import { t, equal } from "testmatrix"
import { JSDOM } from "jsdom"

global.document = new JSDOM(`<div id="app"></div>`).window.document

export default [
  t("superfine", [
    t("h", []),
    t("text", []),
    t("patch", [
      t("first test", [
        equal(
          patch(document.getElementById("app"), h("div", {}, text("hello")))
            .outerHTML,
          `<div id="app">hello</div>`
        ),
      ]),
    ]),
  ]),
]
