const express = require("express");
const app = express();
app.use(express.json());
const { MongoClient , ObjectId } = require('mongodb');

const url = 'mongodb+srv://saachitdurga:GIOsvmMd13Ev0QCV@bulkcity.0ctyedh.mongodb.net/?retryWrites=true&w=majority&appName=BulkCity'; // e.g., 'mongodb://localhost:27017'
const dbName = 'BulkCity';
const client = new MongoClient(url);

let db;

client.connect()
  .then(() => {
    db = client.db(dbName);
    console.log('Connected to MongoDB');
  })
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Get all documents from a collection
app.get('/documents', async (req, res) => {
  try {
    const collection = db.collection('Test data');
    const documents = await collection.find({}).toArray();
    res.json(documents);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch documents' });
  }
});

app.get('/documents/:id', async (req, res) => {
    try {
      const documentId = req.params.id;
      const collection = db.collection('Test data');
  
      // Convert the string ID to an ObjectId
      const objectId = new ObjectId(documentId);
  
      // Find the document by ID
      const document = await collection.findOne({ _id: objectId });
  
      if (document) {
        res.json(document);
      } else {
        res.status(404).json({ error: 'Document not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch document' });
    }
});

app.get('/users', async (req, res) => {
    try {
      const collection = db.collection('User Information');
      const documents = await collection.find({}).toArray();
      res.json(documents);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch documents' });
    }
  });
  
  app.get('/users/:id', async (req, res) => {
      try {
        const documentId = req.params.id;
        const collection = db.collection('User Information');
    
        // Convert the string ID to an ObjectId
        const objectId = new ObjectId(documentId);
    
        // Find the document by ID
        const document = await collection.findOne({ _id: objectId });
    
        if (document) {
          res.json(document);
        } else {
          res.status(404).json({ error: 'Document not found' });
        }
      } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch document' });
      }
  });

  app.get('/exercises', async (req, res) => {
    try {
      const collection = db.collection('Exercises');
      const query = {};
  
      // Partial match for muscle group
      if (req.query['muscle group']) {
        query['muscle group'] = { $regex: new RegExp(req.query['muscle group'], 'i') };
      }
  
      // Partial match for day
      if (req.query.day) {
        query.day = { $regex: new RegExp(req.query.day, 'i') };
      }
  
      // Partial match for equipment
      if (req.query.equipment) {
        query.equipment = { $regex: new RegExp(req.query.equipment, 'i') };
      }
  
      // Partial match for part of muscle
      if (req.query['part of muscle']) {
        query['part of muscle'] = { $regex: new RegExp(req.query['part of muscle'], 'i') };
      }
  
      const documents = await collection.find(query).toArray();
      res.json(documents);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch documents' });
    }
  });
  
  app.get('/exercises/:id', async (req, res) => {
    try {
      const documentId = req.params.id;
      const collection = db.collection('Exercises');
  
      // Convert the string ID to an ObjectId
      const objectId = new ObjectId(documentId);
  
      // Find the document by ID
      const document = await collection.findOne({ _id: objectId });
  
      if (document) {
        res.json(document);
      } else {
        res.status(404).json({ error: 'Document not found' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch document' });
    }
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
