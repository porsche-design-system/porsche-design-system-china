import fs from "fs";
import path from "path";
import jsdom from "jsdom";
import ramda from "ramda";
import replace from "lodash.replace";

const { JSDOM } = jsdom;
const { gt, length } = ramda;

interface IconfontIcons {
  icon: string;
  name: string;
  viewbox?: string;
  style?: string;
}

export const generateIconfont = () =>
  function GenerateIconfont(cb: () => void) {
    const html = "<!DOCTYPE html><head></head><body></body>";
    const _window = new JSDOM(html, {
      runScripts: "dangerously",
      resources: "usable"
    }).window;

    const iconfonts = fs.readdirSync(path.join(__dirname, "../iconfont"));
    let scriptsContent = ``;
    iconfonts.forEach((item) => {
      const scriptContent = fs.readFileSync(path.join(__dirname, `../iconfont/${item}`), "utf8");
      scriptsContent = `${scriptsContent}${scriptContent}`;
    });
    const scriptElement = _window.document.createElement("script");
    scriptElement.textContent = scriptsContent;
    _window.document.head.appendChild(scriptElement);

    const icons: IconfontIcons[] = [];

    const fn = () => {
      const svg = _window.document.querySelectorAll("svg");
      if (gt(length(Array.from(svg)), 0)) {
        fs.mkdirSync("font");
        for (let i = 0; i < svg.length; i++) {
          const style = svg[i].getAttribute("style") || "";
          const symbol = svg[i].querySelectorAll("symbol") || [];
          for (let y = 0; y < symbol.length; y++) {
            const id = symbol[y].getAttribute("id") || "";
            const isNumber = !isNaN(id[4]);
            icons.push({
              icon: symbol[y].innerHTML,
              name: isNumber ? id : replace(id, "icon", ""),
              viewbox: symbol[y].getAttribute("viewBox") || "",
              style
            });
          }
        }
        icons.forEach((item) => {
          const { name, viewbox, style } = item;
          try {
            fs.writeFileSync(
              `${path.join(__dirname, `../font/${name}.svg`)}`,
              `<svg viewBox="${viewbox}" style="${style}">${item.icon}</svg>`
            );
          } catch (error) {
            if (error) console.log(error);
          }
          _window.document.removeEventListener("DOMContentLoaded", fn);
          cb();
        });
      }
    };
    _window.document.addEventListener("DOMContentLoaded", fn);
  };
