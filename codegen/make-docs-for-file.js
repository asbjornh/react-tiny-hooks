const { parse } = require('@babel/parser');
const generator = require('@babel/generator').default;

module.exports = function(fileName, fileContent) {
  const ast = parse(fileContent, { sourceType: 'module' });
  const docComment = ast.comments
    .find(c => c.type === 'CommentBlock')
    .value.split('\n')
    .map(line => line.replace(/[ ]*\* /g, ''))
    .join('\n');

  const exportNode = ast.program.body.find(
    n => n.type === 'ExportDefaultDeclaration'
  ).declaration;
  const params = exportNode.params
    .map(param => generator(param).code)
    .join(', ');

  return [
    `### ${exportNode.id.name}(${params.length ? `_${params}_` : ''})`,
    '',
    `**Import:** _react-tiny-hooks/${fileName.replace('.js', '')}_`,
    '',
    docComment
  ].join('\n');
};
