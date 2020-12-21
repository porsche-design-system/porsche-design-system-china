module.exports = function (plop) {
  // controller generator
  plop.addHelper('headCaps', function (p) {
    p = p.trim();
    return p.slice(0, 1).toUpperCase() + p.slice(1);
  });
  plop.setGenerator('component', {
    description: 'create component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/kits/{{name}}/index.tsx',
        templateFile: 'plop-template/componentIndex.hbs',
      },
      // 暂时去掉 测试文件
      // {
      //   type: 'add',
      //   path: 'src/kits/{{name}}/__test__/{{name}}.test.tsx',
      //   templateFile: 'plop-template/componentTest.hbs',
      // },
      {
        type: 'add',
        path: 'src/kits/{{name}}/{{name}}.stories.tsx',
        templateFile: 'plop-template/componentStories.hbs',
      },
    ],
  });
};
