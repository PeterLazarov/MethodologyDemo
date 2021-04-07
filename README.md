# Blockchain data visualization app

Simple React + NodeJS app made for testing new methodologies and the [Ant Design Hierarchical Grid](https://ant.design/components/table/). 
The data comes from a [Blockchain data API](https://www.blockchain.com/api/blockchain_api ). On the main screen a simple grid with client paging lists basic block data. In the details popup the block transactions are displayed in a hierarchical grid with inner grids for incoming and outcoming.

## Installation

```bash
cd web
npm install
```

```bash
cd api
npm install
```
## Configuration

The web part requires an enviroment file such as:
```sh
# .env
PORT=8080
REACT_APP_API_ADDRESS=http://localhost:3000
```

## Usage

### API
To run the API for development:
```bash
cd api
npm start
```

To run the tests:
```bash
cd api
npm run test
```

### Web
To run for development:
```bash
cd api
npm start
```

## Possible Improvements
- Add multiple screens
- Completely integrate ant design
- Improve the functionalities in order to test working with Ant Design components in more depth
- Integrate Morgan for organized logging
- Setup API module path aliases 
- Swagger documentation