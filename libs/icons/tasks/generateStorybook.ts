import fs from "fs";
import path from "path";

const head = `
<Meta title="Example/Introduction" />

<style>{\`
  .icons-list{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .item{
    box-sizing: border-box;
    width: 20%;
    padding: 20px;
  }
\`}</style>

<h2> svg 图标列表</h2>

<div class="icons-list">
`;

const icon = (filename: string) => `
  <div class="item">
    <${filename} style={{width: '24px', height: '24px'}} />
    <div>${filename}</div>
  </div>
`;

const middle = `
</div>

<h2> svg 图标列表</h2>

<div class="icons-list">
`;

export const generateStorybook = () =>
  function GenerateStorybook(cb: () => void) {
    try {
      let mdx = `import { Meta } from '@storybook/addon-docs/blocks';\n`;
      const svg = fs.readdirSync(path.join(__dirname, "../src/asn/svg"));
      const font = fs.readdirSync(path.join(__dirname, "../src/asn/font"));
      [...svg, ...font].forEach((item) => {
        const filename = item.split(".")[0];
        mdx += `import ${filename} from ${`'../icons/${item}'`};\n`;
      });

      mdx += head;

      svg.forEach((item) => {
        const filename = item.split(".")[0];
        mdx += icon(filename);
      });

      mdx += middle;

      font.forEach((item) => {
        const filename = item.split(".")[0];
        mdx += icon(filename);
      });

      mdx += `</div>\n`;

      try {
        const footer = fs.readFileSync(path.join(__dirname, "../plugins/storybook.mdx"));
        mdx += footer;
        fs.writeFileSync(`${path.join(__dirname, "../src/stories/Introduction.stories.mdx")}`, mdx);
      } catch (error) {
        if (error) console.log(error);
      }
    } catch (error) {
      if (error) console.log(error);
    }
    cb();
  };
