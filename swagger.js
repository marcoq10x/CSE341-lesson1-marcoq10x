const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'Master Marco Contacts API for CSE341'
  },
  host: 'cse341-lesson1-marcoq10x.onrender.com',
  schemes: ['https', 'http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// This will generate the swagger.json file
swaggerAutogen(outputFile, endpointsFiles, doc);