ShExJtoAS(obo)
DDIschema.prefixes = {
 obo: 'http://purl.obolibrary.org/obo/',
 rdf: 'http://www.w3.org/1999/02/22-rdfsyntax-ns#',
 patient: 'http://patient.deltatissue.org/subject',
 specimen: 'http://patient.deltatissue.org/specimen',
 treatment: 'http://patient.deltatissue.org/treatment',
 xsd: 'http://www.w3.org/2001/XMLSchema#',
 rdfs: 'http://www.w3.org/2000/01/rdf-schema#',
 dce: 'http://purl.org/dc/elements/1.1/'
}
$('#schema').append(
  ShExHTML(window.$, marked.parse).asTree(obo, 'http://patient.deltatissue.org/subject')
)

function ShExJtoAS (schema) {
  schema.shapes = schema.shapes.reduce((acc, expr) => {
    let label = expr.id
    delete expr.id
    createRefs(expr)
    acc[label] = createRefs(expr)
    return acc

    function createRefs(object) {
      for (var key in object) {
        var item = object[key];
        if (key === 'valueExpr' && typeof item === 'string')
          object[key] = { type: 'ShapeRef', reference: item };
        else if (typeof item === 'object')
          object[key] = createRefs(item);
      }
      return object;
    }
  }, {})  
}
