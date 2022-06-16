{
 "@context": "http://www.w3.org/ns/shex.jsonld",
  "type": "Schema",
  "shapes": [
    {
      "type": "Shape",
      "id": "http://patient.deltatissue.org/specimenImaging",
      "expression": {
        "type": "EachOf",
        "expressions": [
          {
            "type": "TripleConstraint",
            "predicate": "http://purl.org/dc/elements/1.1/date",
            "valueExpr": {
              "type": "NodeConstraint",
              "datatype": "http://www.w3.org/2001/XMLSchema#dateTime"
            }
          },
          {
            "type": "TripleConstraint",
            "predicate": "http://www.w3.org/1999/02/22-rdf-syntax-ns#range",
            "valueExpr": {
              "type": "NodeConstraint",
              "values": [
                "http://purl.obolibrary.org/obo/NCIT_C64384",
                "http://purl.obolibrary.org/obo/NCIT_C29934",
                "http://purl.obolibrary.org/obo/NCIT_C116443"
              ]
            }
          },
          {
            "type": "TripleConstraint",
            "predicate": "http://www.w3.org/2000/01/rdf-schema#comment",
            "valueExpr": {
              "type": "NodeConstraint",
              "datatype": "http://www.w3.org/2001/XMLSchema#string"
            }
          }
        ]
      }
    },
    {
      "type": "Shape",
      "id": "http://patient.deltatissue.org/specimenMeasurement",
      "expression": {
        "type": "EachOf",
        "expressions": [
          {
            "type": "TripleConstraint",
            "predicate": "http://www.w3.org/2000/01/rdf-schema#comment",
            "valueExpr": {
              "type": "NodeConstraint",
              "datatype": "http://www.w3.org/2001/XMLSchema#string"
            }
          },
          {
            "type": "TripleConstraint",
            "predicate": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            "valueExpr": {
              "type": "NodeConstraint",
              "values": [
                "http://purl.obolibrary.org/obo/NCIT_C25209"
              ]
            }
          },
          {
            "type": "TripleConstraint",
            "predicate": "http://www.w3.org/2000/01/rdf-schema#domain",
            "valueExpr": {
              "type": "NodeConstraint",
              "values": [
                "http://purl.obolibrary.org/obo/NCIT_C123557",
                "http://purl.obolibrary.org/obo/NCIT_C184942",
                "http://purl.obolibrary.org/obo/NCIT_C16149",
                "http://purl.obolibrary.org/obo/NCIT_C16150",
                "http://purl.obolibrary.org/obo/NCIT_C16899",
                "http://purl.obolibrary.org/obo/NCIT_C103223",
                "http://purl.obolibrary.org/obo/NCIT_C168828",
                "http://purl.obolibrary.org/obo/NCIT_C122507"
              ]
            }
          },
          {
            "type": "TripleConstraint",
            "predicate": "http://www.w3.org/1999/02/22-rdf-syntax-ns#value",
            "valueExpr": {
              "type": "NodeConstraint",
              "nodeKind": "literal"
            }
          }
        ]
      }
    },
    {
      "type": "Shape",
      "id": "http://patient.deltatissue.org/specimencollection_method",
      "expression": {
        "type": "EachOf",
        "expressions": [
          {
            "type": "TripleConstraint",
            "predicate": "http://www.w3.org/2000/01/rdf-schema#comment",
            "valueExpr": {
              "type": "NodeConstraint",
              "datatype": "http://www.w3.org/2001/XMLSchema#string"
            }
          },
          {
            "type": "TripleConstraint",
            "predicate": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            "valueExpr": {
              "type": "NodeConstraint",
              "values": [
                "http://purl.obolibrary.org/obo/NCIT_C70700"
              ]
            }
          },
          {
            "type": "TripleConstraint",
            "predicate": "http://www.w3.org/1999/02/22-rdf-syntax-ns#value",
            "valueExpr": {
              "type": "NodeConstraint",
              "values": [
                "http://purl.obolibrary.org/obo/NCIT_C15189",
                "http://purl.obolibrary.org/obo/NCIT_C51496",
                "http://purl.obolibrary.org/obo/NCIT_C51499",
                "http://purl.obolibrary.org/obo/NCIT_C15279",
                "http://purl.obolibrary.org/obo/NCIT_C51633",
                "http://purl.obolibrary.org/obo/NCIT_C51698",
                "http://purl.obolibrary.org/obo/NCIT_C137849",
                "http://purl.obolibrary.org/obo/NCIT_C137850",
                "http://purl.obolibrary.org/obo/NCIT_C137851"
              ]
            }
          }
        ]
      }
    },
    {
      "type": "Shape",
      "id": "http://patient.deltatissue.org/subjectAge",
      "expression": {
        "type": "EachOf",
        "expressions": [
          {
            "type": "TripleConstraint",
            "predicate": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            "valueExpr": {
              "type": "NodeConstraint",
              "values": [
                "http://purl.obolibrary.org/obo/NCIT_C25150"
              ]
            }
          },
          {
            "type": "TripleConstraint",
            "predicate": "http://www.w3.org/1999/02/22-rdf-syntax-ns#value",
            "valueExpr": {
              "type": "NodeConstraint",
              "datatype": "http://www.w3.org/2001/XMLSchema#int"
            }
          }
        ]
      }
    },
    {
      "type": "Shape",
      "id": "http://patient.deltatissue.org/subjectAncestry",
      "expression": {
        "type": "EachOf",
        "expressions": [
          {
            "type": "TripleConstraint",
            "predicate": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            "valueExpr": {
              "type": "NodeConstraint",
              "values": [
                "http://purl.obolibrary.org/obo/NCIT_C176763"
              ]
            }
          },
          {
            "type": "TripleConstraint",
            "predicate": "http://www.w3.org/1999/02/22-rdf-syntax-ns#value",
            "valueExpr": {
              "type": "NodeConstraint",
              "values": [
                "http://purl.obolibrary.org/obo/NCIT_C41260",
                "http://purl.obolibrary.org/obo/NCIT_C128991",
                "http://purl.obolibrary.org/obo/NCIT_C128992",
                "http://purl.obolibrary.org/obo/NCIT_C16352",
                "http://purl.obolibrary.org/obo/NCIT_C41261",
                "http://purl.obolibrary.org/obo/NCIT_C67109",
                "http://purl.obolibrary.org/obo/NCIT_C77809",
                "http://purl.obolibrary.org/obo/NCIT_C77810",
                "http://purl.obolibrary.org/obo/NCIT_C77811",
                "http://purl.obolibrary.org/obo/NCIT_C77812",
                "http://purl.obolibrary.org/obo/NCIT_C77813",
                "http://purl.obolibrary.org/obo/NCIT_C77814",
                "http://purl.obolibrary.org/obo/NCIT_C77815",
                "http://purl.obolibrary.org/obo/NCIT_C77816",
                "http://purl.obolibrary.org/obo/NCIT_C77817",
                "http://purl.obolibrary.org/obo/NCIT_C77818",
                "http://purl.obolibrary.org/obo/NCIT_C77819",
                "http://purl.obolibrary.org/obo/NCIT_C77820",
                "http://purl.obolibrary.org/obo/NCIT_C16310",
                "http://purl.obolibrary.org/obo/NCIT_C104495",
                "http://purl.obolibrary.org/obo/NCIT_C126531",
                "http://purl.obolibrary.org/obo/NCIT_C126532",
                "http://purl.obolibrary.org/obo/NCIT_C126535",
                "http://purl.obolibrary.org/obo/NCIT_C126536",
                "http://purl.obolibrary.org/obo/NCIT_C126537",
                "http://purl.obolibrary.org/obo/NCIT_C126538",
                "http://purl.obolibrary.org/obo/NCIT_C42331",
                "http://purl.obolibrary.org/obo/NCIT_C41259",
                "http://purl.obolibrary.org/obo/NCIT_C41226",
                "http://purl.obolibrary.org/obo/NCIT_C43390",
                "http://purl.obolibrary.org/obo/NCIT_C43851",
                "http://purl.obolibrary.org/obo/NCIT_C43866"
              ]
            }
          }
        ]
      }
    },
    {
      "type": "Shape",
      "id": "http://patient.deltatissue.org/subjectEthnicity",
      "expression": {
        "type": "EachOf",
        "expressions": [
          {
            "type": "TripleConstraint",
            "predicate": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            "valueExpr": {
              "type": "NodeConstraint",
              "values": [
                "http://purl.obolibrary.org/obo/NCIT_C16564"
              ]
            }
          },
          {
            "type": "TripleConstraint",
            "predicate": "http://www.w3.org/1999/02/22-rdf-syntax-ns#value",
            "valueExpr": {
              "type": "NodeConstraint",
              "values": [
                "http://purl.obolibrary.org/obo/SCDO_1000116",
                "http://purl.obolibrary.org/obo/SCDO_1000117",
                "http://purl.obolibrary.org/obo/SCDO_1000118",
                "http://purl.obolibrary.org/obo/SCDO_1000119",
                "http://purl.obolibrary.org/obo/SCDO_1000120",
                "http://purl.obolibrary.org/obo/SCDO_1000121",
                "http://purl.obolibrary.org/obo/SCDO_1000122",
                "http://purl.obolibrary.org/obo/SCDO_1000123",
                "http://purl.obolibrary.org/obo/SCDO_1000124",
                "http://purl.obolibrary.org/obo/SCDO_1000125",
                "http://purl.obolibrary.org/obo/SCDO_1000126",
                "http://purl.obolibrary.org/obo/SCDO_1000127",
                "http://purl.obolibrary.org/obo/SCDO_1000128",
                "http://purl.obolibrary.org/obo/SCDO_1000129",
                "http://purl.obolibrary.org/obo/SCDO_1000130",
                "http://purl.obolibrary.org/obo/SCDO_1000131",
                "http://purl.obolibrary.org/obo/SCDO_1000132",
                "http://purl.obolibrary.org/obo/SCDO_1000133",
                "http://purl.obolibrary.org/obo/SCDO_1000134",
                "http://purl.obolibrary.org/obo/SCDO_1000135",
                "http://purl.obolibrary.org/obo/SCDO_1000136",
                "http://purl.obolibrary.org/obo/SCDO_1000137",
                "http://purl.obolibrary.org/obo/SCDO_1000138",
                "http://purl.obolibrary.org/obo/SCDO_1000139",
                "http://purl.obolibrary.org/obo/SCDO_1000141",
                "http://purl.obolibrary.org/obo/NCIT_C17459",
                "http://purl.obolibrary.org/obo/NCIT_C158158",
                "http://purl.obolibrary.org/obo/NCIT_C158159",
                "http://purl.obolibrary.org/obo/NCIT_C158160",
                "http://purl.obolibrary.org/obo/NCIT_C158161",
                "http://purl.obolibrary.org/obo/NCIT_C158162",
                "http://purl.obolibrary.org/obo/NCIT_C158163",
                "http://purl.obolibrary.org/obo/NCIT_C158164",
                "http://purl.obolibrary.org/obo/NCIT_C158165",
                "http://purl.obolibrary.org/obo/NCIT_C158166",
                "http://purl.obolibrary.org/obo/NCIT_C158167",
                "http://purl.obolibrary.org/obo/NCIT_C158168",
                "http://purl.obolibrary.org/obo/NCIT_C158169",
                "http://purl.obolibrary.org/obo/NCIT_C158170",
                "http://purl.obolibrary.org/obo/NCIT_C158171",
                "http://purl.obolibrary.org/obo/NCIT_C158172",
                "http://purl.obolibrary.org/obo/NCIT_C158173",
                "http://purl.obolibrary.org/obo/NCIT_C158174",
                "http://purl.obolibrary.org/obo/NCIT_C158175",
                "http://purl.obolibrary.org/obo/NCIT_C158176",
                "http://purl.obolibrary.org/obo/NCIT_C158177",
                "http://purl.obolibrary.org/obo/NCIT_C158178",
                "http://purl.obolibrary.org/obo/NCIT_C158179",
                "http://purl.obolibrary.org/obo/NCIT_C158180",
                "http://purl.obolibrary.org/obo/NCIT_C158181",
                "http://purl.obolibrary.org/obo/NCIT_C158182",
                "http://purl.obolibrary.org/obo/NCIT_C158183",
                "http://purl.obolibrary.org/obo/NCIT_C158184",
                "http://purl.obolibrary.org/obo/NCIT_C158185",
                "http://purl.obolibrary.org/obo/NCIT_C158186",
                "http://purl.obolibrary.org/obo/NCIT_C158187",
                "http://purl.obolibrary.org/obo/NCIT_C158188",
                "http://purl.obolibrary.org/obo/NCIT_C158189",
                "http://purl.obolibrary.org/obo/NCIT_C158190",
                "http://purl.obolibrary.org/obo/NCIT_C158191",
                "http://purl.obolibrary.org/obo/NCIT_C158192",
                "http://purl.obolibrary.org/obo/NCIT_C158193",
                "http://purl.obolibrary.org/obo/NCIT_C158194",
                "http://purl.obolibrary.org/obo/NCIT_C158195",
                "http://purl.obolibrary.org/obo/NCIT_C158196",
                "http://purl.obolibrary.org/obo/NCIT_C158197",
                "http://purl.obolibrary.org/obo/NCIT_C158198",
                "http://purl.obolibrary.org/obo/NCIT_C158199",
                "http://purl.obolibrary.org/obo/NCIT_C158200",
                "http://purl.obolibrary.org/obo/NCIT_C158201",
                "http://purl.obolibrary.org/obo/NCIT_C158202",
                "http://purl.obolibrary.org/obo/NCIT_C158203",
                "http://purl.obolibrary.org/obo/NCIT_C158204",
                "http://purl.obolibrary.org/obo/NCIT_C158205",
                "http://purl.obolibrary.org/obo/NCIT_C158206",
                "http://purl.obolibrary.org/obo/NCIT_C158207",
                "http://purl.obolibrary.org/obo/NCIT_C158208",
                "http://purl.obolibrary.org/obo/NCIT_C158209",
                "http://purl.obolibrary.org/obo/NCIT_C158210",
                "http://purl.obolibrary.org/obo/NCIT_C158211",
                "http://purl.obolibrary.org/obo/NCIT_C158212",
                "http://purl.obolibrary.org/obo/NCIT_C158213",
                "http://purl.obolibrary.org/obo/NCIT_C128457",
                "http://purl.obolibrary.org/obo/NCIT_C128458",
                "http://purl.obolibrary.org/obo/NCIT_C128459",
                "http://purl.obolibrary.org/obo/NCIT_C103283",
                "http://purl.obolibrary.org/obo/NCIT_C17950",
                "http://purl.obolibrary.org/obo/NCIT_C41222"
              ]
            }
          }
        ]
      }
    },
    {
      "type": "Shape",
      "id": "http://patient.deltatissue.org/subjectTreatment",
      "expression": {
        "type": "EachOf",
        "expressions": [
          {
            "type": "TripleConstraint",
            "predicate": "http://www.w3.org/2000/01/rdf-schema#comment",
            "valueExpr": {
              "type": "NodeConstraint",
              "datatype": "http://www.w3.org/2001/XMLSchema#string"
            }
          },
          {
            "type": "TripleConstraint",
            "predicate": "http://purl.obolibrary.org/obo/NCIT_P302",
            "valueExpr": "http://patient.deltatissue.org/subjectarchived_specimen"
          },
          {
            "type": "TripleConstraint",
            "predicate": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            "valueExpr": {
              "type": "NodeConstraint",
              "values": [
                "http://purl.obolibrary.org/obo/NCIT_C25409"
              ]
            }
          },
          {
            "type": "TripleConstraint",
            "predicate": "http://www.w3.org/2000/01/rdf-schema#range",
            "valueExpr": {
              "type": "ShapeOr",
              "shapeExprs": [
                "http://patient.deltatissue.org/treatmentNeoadjuvant",
                "http://patient.deltatissue.org/treatmentAdjuvant",
                "http://patient.deltatissue.org/treatmentMetastasis"
              ]
            }
          }
        ]
      }
    },
    {
      "type": "Shape",
      "id": "http://patient.deltatissue.org/subjectarchived_specimen",
      "expression": {
        "type": "EachOf",
        "expressions": [
          {
            "type": "TripleConstraint",
            "predicate": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            "valueExpr": {
              "type": "NodeConstraint",
              "values": [
                "http://purl.obolibrary.org/obo/NCIT_C19157"
              ]
            }
          },
          {
            "type": "TripleConstraint",
            "predicate": "http://purl.obolibrary.org/obo/RO_0040035",
            "valueExpr": "http://patient.deltatissue.org/subjectdiagnosis"
          },
          {
            "type": "TripleConstraint",
            "predicate": "http://purl.obolibrary.org/obo/HSO_0000288",
            "valueExpr": "http://patient.deltatissue.org/specimencollection_method"
          },
          {
            "type": "TripleConstraint",
            "predicate": "http://purl.obolibrary.org/obo/TXPO_0001873",
            "valueExpr": "http://patient.deltatissue.org/specimenMeasurement"
          },
          {
            "type": "TripleConstraint",
            "predicate": "http://purl.obolibrary.org/obo/NCIT_R165",
            "valueExpr": "http://patient.deltatissue.org/specimenImaging"
          }
        ]
      }
    },
    {
      "type": "Shape",
      "id": "http://patient.deltatissue.org/subjectdiagnosis",
      "expression": {
        "type": "EachOf",
        "expressions": [
          {
            "type": "TripleConstraint",
            "predicate": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            "valueExpr": {
              "type": "NodeConstraint",
              "values": [
                "http://purl.obolibrary.org/obo/DOID_4"
              ]
            }
          },
          {
            "type": "TripleConstraint",
            "predicate": "http://www.w3.org/1999/02/22-rdf-syntax-ns#value",
            "valueExpr": {
              "type": "NodeConstraint",
              "values": [
                "http://purl.obolibrary.org/obo/NCIT_C27093",
                "http://purl.obolibrary.org/obo/NCIT_C27282",
                "http://purl.obolibrary.org/obo/NCIT_C27467",
                "http://purl.obolibrary.org/obo/NCIT_C27790",
                "http://purl.obolibrary.org/obo/NCIT_C28292",
                "http://purl.obolibrary.org/obo/NCIT_C2906",
                "http://purl.obolibrary.org/obo/NCIT_C2917",
                "http://purl.obolibrary.org/obo/NCIT_C35758",
                "http://purl.obolibrary.org/obo/NCIT_C3637",
                "http://purl.obolibrary.org/obo/NCIT_C3638",
                "http://purl.obolibrary.org/obo/NCIT_C3639",
                "http://purl.obolibrary.org/obo/NCIT_C3640",
                "http://purl.obolibrary.org/obo/NCIT_C3641",
                "http://purl.obolibrary.org/obo/NCIT_C3642",
                "http://purl.obolibrary.org/obo/NCIT_C3644",
                "http://purl.obolibrary.org/obo/NCIT_C4000",
                "http://purl.obolibrary.org/obo/NCIT_C4520",
                "http://purl.obolibrary.org/obo/NCIT_C4522",
                "http://purl.obolibrary.org/obo/NCIT_C4529",
                "http://purl.obolibrary.org/obo/NCIT_C4531",
                "http://purl.obolibrary.org/obo/NCIT_C4588",
                "http://purl.obolibrary.org/obo/NCIT_C4590",
                "http://purl.obolibrary.org/obo/NCIT_C4592",
                "http://purl.obolibrary.org/obo/NCIT_C4593",
                "http://purl.obolibrary.org/obo/NCIT_C4594",
                "http://purl.obolibrary.org/obo/NCIT_C4597",
                "http://purl.obolibrary.org/obo/NCIT_C4853",
                "http://purl.obolibrary.org/obo/NCIT_C4892",
                "http://purl.obolibrary.org/obo/NCIT_C5017",
                "http://purl.obolibrary.org/obo/NCIT_C5023",
                "http://purl.obolibrary.org/obo/NCIT_C5137",
                "http://purl.obolibrary.org/obo/NCIT_C5138",
                "http://purl.obolibrary.org/obo/NCIT_C5139",
                "http://purl.obolibrary.org/obo/NCIT_C8932",
                "http://purl.obolibrary.org/obo/NCIT_C9099",
                "http://purl.obolibrary.org/obo/NCIT_C9101",
                "http://purl.obolibrary.org/obo/NCIT_C9104",
                "http://purl.obolibrary.org/obo/NCIT_C132783",
                "http://purl.obolibrary.org/obo/NCIT_C132995",
                "http://purl.obolibrary.org/obo/NCIT_C133519",
                "http://purl.obolibrary.org/obo/NCIT_C2924",
                "http://purl.obolibrary.org/obo/NCIT_C35180",
                "http://purl.obolibrary.org/obo/NCIT_C4439",
                "http://purl.obolibrary.org/obo/NCIT_C4587",
                "http://purl.obolibrary.org/obo/NCIT_C4942",
                "http://purl.obolibrary.org/obo/NCIT_C6877",
                "http://purl.obolibrary.org/obo/NCIT_C7939",
                "http://purl.obolibrary.org/obo/NCIT_C137839",
                "http://purl.obolibrary.org/obo/NCIT_C7788",
                "http://purl.obolibrary.org/obo/NCIT_C7794",
                "http://purl.obolibrary.org/obo/NCIT_C89550",
                "http://purl.obolibrary.org/obo/NCIT_C89771",
                "http://purl.obolibrary.org/obo/NCIT_C9100",
                "http://purl.obolibrary.org/obo/NCIT_C61602",
                "http://purl.obolibrary.org/obo/NCIT_C35989",
                "http://purl.obolibrary.org/obo/NCIT_C8329",
                "http://purl.obolibrary.org/obo/NCIT_C8351",
                "http://purl.obolibrary.org/obo/NCIT_C51139",
                "http://purl.obolibrary.org/obo/NCIT_C8327",
                "http://purl.obolibrary.org/obo/NCIT_C8328",
                "http://purl.obolibrary.org/obo/NCIT_C9478",
                "http://purl.obolibrary.org/obo/NCIT_C8331",
                "http://purl.obolibrary.org/obo/NCIT_C8332",
                "http://purl.obolibrary.org/obo/NCIT_C8333",
                "http://purl.obolibrary.org/obo/NCIT_C8337",
                "http://purl.obolibrary.org/obo/NCIT_C8338",
                "http://purl.obolibrary.org/obo/NCIT_C8339",
                "http://purl.obolibrary.org/obo/NCIT_C8340",
                "http://purl.obolibrary.org/obo/NCIT_C8342",
                "http://purl.obolibrary.org/obo/NCIT_C8343",
                "http://purl.obolibrary.org/obo/NCIT_C8344",
                "http://purl.obolibrary.org/obo/NCIT_C8345",
                "http://purl.obolibrary.org/obo/NCIT_C8346",
                "http://purl.obolibrary.org/obo/NCIT_C8347",
                "http://purl.obolibrary.org/obo/NCIT_C8348",
                "http://purl.obolibrary.org/obo/NCIT_C8349",
                "http://purl.obolibrary.org/obo/NCIT_C8350",
                "http://purl.obolibrary.org/obo/NCIT_C8352",
                "http://purl.obolibrary.org/obo/NCIT_C8448",
                "http://purl.obolibrary.org/obo/NCIT_C8450",
                "http://purl.obolibrary.org/obo/NCIT_C8452",
                "http://purl.obolibrary.org/obo/NCIT_C8454",
                "http://purl.obolibrary.org/obo/NCIT_C8341",
                "http://purl.obolibrary.org/obo/NCIT_C3975",
                "http://purl.obolibrary.org/obo/NCIT_C8326",
                "http://purl.obolibrary.org/obo/NCIT_C8330",
                "http://purl.obolibrary.org/obo/NCIT_C115966",
                "http://purl.obolibrary.org/obo/NCIT_C123160",
                "http://purl.obolibrary.org/obo/NCIT_C27202",
                "http://purl.obolibrary.org/obo/NCIT_C27474",
                "http://purl.obolibrary.org/obo/NCIT_C27829",
                "http://purl.obolibrary.org/obo/NCIT_C27830",
                "http://purl.obolibrary.org/obo/NCIT_C27831",
                "http://purl.obolibrary.org/obo/NCIT_C27832",
                "http://purl.obolibrary.org/obo/NCIT_C27885",
                "http://purl.obolibrary.org/obo/NCIT_C27905",
                "http://purl.obolibrary.org/obo/NCIT_C27906",
                "http://purl.obolibrary.org/obo/NCIT_C27916",
                "http://purl.obolibrary.org/obo/NCIT_C36084",
                "http://purl.obolibrary.org/obo/NCIT_C36085",
                "http://purl.obolibrary.org/obo/NCIT_C39816",
                "http://purl.obolibrary.org/obo/NCIT_C39817",
                "http://purl.obolibrary.org/obo/NCIT_C39818",
                "http://purl.obolibrary.org/obo/NCIT_C39819",
                "http://purl.obolibrary.org/obo/NCIT_C39820",
                "http://purl.obolibrary.org/obo/NCIT_C39821",
                "http://purl.obolibrary.org/obo/NCIT_C39822",
                "http://purl.obolibrary.org/obo/NCIT_C39823",
                "http://purl.obolibrary.org/obo/NCIT_C39824",
                "http://purl.obolibrary.org/obo/NCIT_C39825",
                "http://purl.obolibrary.org/obo/NCIT_C39826",
                "http://purl.obolibrary.org/obo/NCIT_C39827",
                "http://purl.obolibrary.org/obo/NCIT_C39828",
                "http://purl.obolibrary.org/obo/NCIT_C39829",
                "http://purl.obolibrary.org/obo/NCIT_C39853",
                "http://purl.obolibrary.org/obo/NCIT_C39879",
                "http://purl.obolibrary.org/obo/NCIT_C39880",
                "http://purl.obolibrary.org/obo/NCIT_C39881",
                "http://purl.obolibrary.org/obo/NCIT_C39882",
                "http://purl.obolibrary.org/obo/NCIT_C39884",
                "http://purl.obolibrary.org/obo/NCIT_C39885",
                "http://purl.obolibrary.org/obo/NCIT_C39895",
                "http://purl.obolibrary.org/obo/NCIT_C39896",
                "http://purl.obolibrary.org/obo/NCIT_C39897",
                "http://purl.obolibrary.org/obo/NCIT_C39902",
                "http://purl.obolibrary.org/obo/NCIT_C39903",
                "http://purl.obolibrary.org/obo/NCIT_C4001",
                "http://purl.obolibrary.org/obo/NCIT_C4536",
                "http://purl.obolibrary.org/obo/NCIT_C47847",
                "http://purl.obolibrary.org/obo/NCIT_C47848",
                "http://purl.obolibrary.org/obo/NCIT_C5142",
                "http://purl.obolibrary.org/obo/NCIT_C5161",
                "http://purl.obolibrary.org/obo/NCIT_C5163",
                "http://purl.obolibrary.org/obo/NCIT_C5167",
                "http://purl.obolibrary.org/obo/NCIT_C5168",
                "http://purl.obolibrary.org/obo/NCIT_C5176",
                "http://purl.obolibrary.org/obo/NCIT_C5178",
                "http://purl.obolibrary.org/obo/NCIT_C5457",
                "http://purl.obolibrary.org/obo/NCIT_C54691",
                "http://purl.obolibrary.org/obo/NCIT_C5530",
                "http://purl.obolibrary.org/obo/NCIT_C5597",
                "http://purl.obolibrary.org/obo/NCIT_C5649",
                "http://purl.obolibrary.org/obo/NCIT_C6987",
                "http://purl.obolibrary.org/obo/NCIT_C5536",
                "http://purl.obolibrary.org/obo/NCIT_C162531",
                "http://purl.obolibrary.org/obo/NCIT_C171012",
                "http://purl.obolibrary.org/obo/NCIT_C9480",
                "http://purl.obolibrary.org/obo/NCIT_C7362",
                "http://purl.obolibrary.org/obo/NCIT_C9135",
                "http://purl.obolibrary.org/obo/NCIT_C156123",
                "http://purl.obolibrary.org/obo/NCIT_C156286",
                "http://purl.obolibrary.org/obo/NCIT_C156287",
                "http://purl.obolibrary.org/obo/NCIT_C156289",
                "http://purl.obolibrary.org/obo/NCIT_C46070",
                "http://purl.obolibrary.org/obo/NCIT_C46072",
                "http://purl.obolibrary.org/obo/NCIT_C94445"
              ]
            }
          }
        ]
      }
    },
    {
      "type": "Shape",
      "id": "http://patient.deltatissue.org/subjectid",
      "expression": {
        "type": "EachOf",
        "expressions": [
          {
            "type": "TripleConstraint",
            "predicate": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            "valueExpr": {
              "type": "NodeConstraint",
              "values": [
                "http://purl.obolibrary.org/obo/NCIT_C16960"
              ]
            }
          },
          {
            "type": "TripleConstraint",
            "predicate": "http://patient.deltatissue.org/subjectpatient_property",
            "valueExpr": "http://patient.deltatissue.org/subjectAge"
          },
          {
            "type": "TripleConstraint",
            "predicate": "http://patient.deltatissue.org/subjectpatient_property",
            "valueExpr": "http://patient.deltatissue.org/subjectAncestry"
          },
          {
            "type": "TripleConstraint",
            "predicate": "http://patient.deltatissue.org/subjectpatient_property",
            "valueExpr": "http://patient.deltatissue.org/subjectEthnicity"
          },
          {
            "type": "TripleConstraint",
            "predicate": "http://purl.obolibrary.org/obo/OBI_0100051",
            "valueExpr": "http://patient.deltatissue.org/subjectarchived_specimen"
          }
        ]
      }
    },
    {
      "type": "Shape",
      "id": "http://patient.deltatissue.org/treatmentAdjuvant",
      "expression": {
        "type": "EachOf",
        "expressions": [
          {
            "type": "TripleConstraint",
            "predicate": "http://www.w3.org/2000/01/rdf-schema#comment",
            "valueExpr": {
              "type": "NodeConstraint",
              "datatype": "http://www.w3.org/2001/XMLSchema#string"
            }
          },
          {
            "type": "TripleConstraint",
            "predicate": "http://www.w3.org/2000/01/rdf-schema#range",
            "valueExpr": {
              "type": "NodeConstraint",
              "values": [
                "http://purl.obolibrary.org/obo/NCIT_C15632",
                "http://purl.obolibrary.org/obo/NCIT_C15445",
                "http://purl.obolibrary.org/obo/NCIT_C123633"
              ]
            }
          }
        ]
      }
    },
    {
      "type": "Shape",
      "id": "http://patient.deltatissue.org/treatmentMetastasis",
      "expression": {
        "type": "EachOf",
        "expressions": [
          {
            "type": "TripleConstraint",
            "predicate": "http://purl.org/dc/elements/1.1/date",
            "valueExpr": {
              "type": "NodeConstraint",
              "datatype": "http://www.w3.org/2001/XMLSchema#dateTime"
            }
          },
          {
            "type": "TripleConstraint",
            "predicate": "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
            "valueExpr": {
              "type": "NodeConstraint",
              "values": [
                "http://purl.obolibrary.org/obo/NCIT_C19151"
              ]
            }
          },
          {
            "type": "TripleConstraint",
            "predicate": "http://www.w3.org/2000/01/rdf-schema#comment",
            "valueExpr": {
              "type": "NodeConstraint",
              "datatype": "http://www.w3.org/2001/XMLSchema#string"
            }
          },
          {
            "type": "TripleConstraint",
            "predicate": "http://purl.obolibrary.org/obo/RO_0001025",
            "valueExpr": {
              "type": "NodeConstraint",
              "values": [
                "http://purl.obolibrary.org/obo/NCIT_C12366",
                "http://purl.obolibrary.org/obo/NCIT_C12468",
                "http://purl.obolibrary.org/obo/NCIT_C12392"
              ]
            }
          }
        ]
      }
    },
    {
      "type": "Shape",
      "id": "http://patient.deltatissue.org/treatmentNeoadjuvant",
      "expression": {
        "type": "EachOf",
        "expressions": [
          {
            "type": "TripleConstraint",
            "predicate": "http://www.w3.org/2000/01/rdf-schema#comment",
            "valueExpr": {
              "type": "NodeConstraint",
              "datatype": "http://www.w3.org/2001/XMLSchema#string"
            }
          },
          {
            "type": "TripleConstraint",
            "predicate": "http://www.w3.org/2000/01/rdf-schema#range",
            "valueExpr": {
              "type": "NodeConstraint",
              "values": [
                "http://purl.obolibrary.org/obo/NCIT_C15632",
                "http://purl.obolibrary.org/obo/NCIT_C15445",
                "http://purl.obolibrary.org/obo/NCIT_C123603"
              ]
            }
          }
        ]
      }
    }
  ]
}