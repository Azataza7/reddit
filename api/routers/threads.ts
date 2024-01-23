import { Router } from 'express';
import { userMessage } from '../types';
import fileDb from '../fileDb';

const threadsRouter = Router();

let messages: userMessage[] = [];

threadsRouter.get('/', async (req, res) => {
  messages = await fileDb.getItems();
  res.send(messages);
});

threadsRouter.post('/', async (req, res) => {
  const message: userMessage = {
    author: req.body.author ? req.body.author : null,
    text: req.body.text,
    image: req.body.image ? req.body.image : null,
  }

  await fileDb.addItem(message);
  res.send(message)
})

export default threadsRouter;