# Blockhain data visualization app

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
- Improve the functionalities in order to test working with Ant Design components in more depth
- Integrate Morgan for organized logging
- Setup API module path aliases 
- Swagger documentation