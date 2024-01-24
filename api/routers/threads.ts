import { Router } from 'express';
import { userMessage } from '../types';
import fileDb from '../fileDb';
import { imagesUpload } from '../multer';

const threadsRouter = Router();

let messages: userMessage[] = [];

threadsRouter.get('/', async (req, res) => {
  messages = await fileDb.getItems();
  res.send(messages);
});

threadsRouter.post('/', imagesUpload.single('image'), async (req, res) => {
  const message: userMessage = {
    author: req.body.author ? req.body.author : null,
    text: req.body.text,
    image: req.file ? req.file.filename : null,
  };

  await fileDb.addItem(message);
  res.send(message);
});

export default threadsRouter;