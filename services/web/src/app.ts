import express from 'express';

export class App {
  private server: express.Application;

  constructor() {
    this.server = express();
    this.server.get('/', (req, res) => {
      console.log(`Request: ${req.path}`);
      res.send('Hello, World!');
    });
  }

  public run() {
    this.server.listen(3000, () => {
      console.log(`Server is listening on *:3000`);
    });
  }
}

export default App;