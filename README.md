# React + NodeJS Playground

A React + NodeJS playground app meant entirely for experiments and testing new methodologies. 
The data comes from a [Blockchain data API](https://www.blockchain.com/api/blockchain_api ). On the main screen a simple grid with client paging lists basic block data. In the details popup the block transactions are displayed in a hierarchical grid with inner grids for incoming and outcoming.

## Installation

```bash
cd web
npm install
```

```bash
cd blockchain-api
npm install
```
## Configuration

The web part requires an enviroment file such as:
```sh
# .env
PORT=8080
REACT_APP_BLOCKCHAIN_API_ADDRESS=http://localhost:3000
REACT_APP_ROLLBAR_TOKEN=<token>
REACT_APP_ROLLBAR_ENVIRONMENT=<environment>
```

## Usage

### API
To run the API for development:
```bash
cd blockchain-api
npm start
```

To run the tests:
```bash
cd blockchain-api
npm run test
```

### Web
To run for development:
```bash
cd api
npm start
```

## Possible Improvements
- Add an express api for mongo
- Add basic authentication functionality to the frontend
- Completely integrate ant design
- Setup API module path aliases 
- Swagger documentation