module.exports = {
  floatPrecision: 2,
  plugins: [
    // set of built-in plugins enabled by default
    "preset-default",
    // enable built-in plugins by name
    "cleanupAttrs",
    "removeDoctype",
    "removeXMLProcInst",
    "removeXMLNS",
    "removeComments",
    "removeMetadata",
    "removeTitle",
    "removeDesc",
    "removeUselessDefs",
    "removeEditorsNSData",
    "removeEmptyAttrs",
    "removeHiddenElems",
    "removeEmptyText",
    "removeEmptyContainers",
    "cleanupEnableBackground",
    "convertStyleToAttrs",
    "convertColors",
    "convertPathData",
    "convertTransform",
    "removeUnknownsAndDefaults",
    "removeNonInheritableGroupAttrs",
    "removeUselessStrokeAndFill",
    "removeUnusedNS",
    "cleanupIDs",
    "cleanupNumericValues",
    "moveElemsAttrsToGroup",
    "moveGroupAttrsToElems",
    "collapseGroups",
    "mergePaths",
    "convertShapeToPath",
    "sortAttrs",
    "removeDimensions",
    {
      name: "removeAttrs",
      params: {
        attrs: ["class"]
      }
    }
  ]
};
