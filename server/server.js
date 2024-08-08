const express = require('express');
const { google } = require('googleapis');
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Readable } = require('stream');
require('dotenv').config();

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:3000',  // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));

const authenticateGoogle = () => {
    const auth = new google.auth.GoogleAuth({
        keyFile: process.env.GOOGLE_CLOUD_KEY_FILE,
        scopes: ['https://www.googleapis.com/auth/drive.file'],
    });
    return auth;
};

app.get('/', (req, res) => {
    res.send('Welcome to the Google Drive API service!');
});

app.post('/upload', upload.single('file'), async (req, res) => {
    console.log('Request Body:', req.body);
    console.log('File:', req.file);

    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const { text, price, type, category, collection, description, howToUse, priceTwo } = req.body;
    const auth = authenticateGoogle();
    const driveService = google.drive({ version: 'v3', auth });

    const fileMetadata = {
        name: req.file.originalname,
        parents: [process.env.GOOGLE_DRIVE_FOLDER_ID], // Replace with your folder ID
        description: JSON.stringify({ text, price, type, category, collection, description, howToUse, priceTwo })
    };
    const media = {
        mimeType: req.file.mimetype,
        body: Readable.from(req.file.buffer),  // Use Readable stream from buffer
    };

    try {
        const file = await driveService.files.create({
            resource: fileMetadata,
            media: media,
            fields: 'id',
        });
        res.status(200).json({ id: file.data.id });
    } catch (error) {
        console.error('Error uploading to Google Drive:', error);
        res.status(500).send(error.message);
    }
});

app.get('/list', async (req, res) => {
    const auth = authenticateGoogle();
    const driveService = google.drive({ version: 'v3', auth });
    try {
        const response = await driveService.files.list({
            q: `'${process.env.GOOGLE_DRIVE_FOLDER_ID}' in parents`,
            fields: 'files(id, name, webContentLink, description)', // include necessary fields
        });

        const files = response.data.files.map(file => {
            const fileId = file.id;
            const directLink = `https://drive.google.com/thumbnail?id=${fileId}`;
            const description = file.description ? JSON.parse(file.description) : {};
            return {
                id: fileId,
                text: file.name,
                image: directLink,
                price: description.price || '0',
                category: description.category || '',
                collection: description.collection || '',
                type: description.type || '',
                description: description.description || '',
                howToUse: description.howToUse || '',
                priceTwo: description.priceTwo || '',
            };
        });

        res.status(200).json(files);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

async function updateFile(fileId, fileMetadata, media) {
    try {
        const auth = authenticateGoogle();
        const driveService = google.drive({ version: 'v3', auth });

        const response = await driveService.files.update({
            fileId: fileId,
            media: media,
            requestBody: fileMetadata,
            fields: 'id, name',
        });
        console.log(`File updated: ${response.data.name}`);
        return response.data;
    } catch (err) {
        console.error(err);
    }
}

app.post('/update', upload.single('file'), async (req, res) => {
    const { fileId, text, price, type, category, collection, description, howToUse, priceTwo } = req.body;

    // Check if fileId is provided
    if (!fileId) {
        return res.status(400).send('fileId is required.');
    }

    // Check if file is uploaded
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const fileMetadata = {
        name: req.file.originalname,
        description: JSON.stringify({ text, price, type, category, collection, description, howToUse, priceTwo })
    };

    const media = {
        mimeType: req.file.mimetype,
        body: Readable.from(req.file.buffer),  // Use Readable stream from buffer
    };

    try {
        const updatedFile = await updateFile(fileId, fileMetadata, media);
        res.status(200).json(updatedFile);
    } catch (error) {
        console.error('Error updating file:', error);
        res.status(500).send(error.message);
    }
});


async function deleteFile(fileId) {
    try {
        const auth = authenticateGoogle();
        const driveService = google.drive({ version: 'v3', auth });

        await driveService.files.delete({
            fileId: fileId,
        });
        console.log(`File deleted: ${fileId}`);
    } catch (err) {
        console.error(err);
    }
}

app.post('/delete', async (req, res) => {
    const { fileId } = req.body;

    try {
        await deleteFile(fileId);
        res.status(200).send(`File deleted: ${fileId}`);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(5001, () => {
    console.log('Server running on http://localhost:5001');
});
