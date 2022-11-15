const PERSISTENCE_TYPE = {
    TYPE_MEM: 'MEMORY',
    TYPE_FILE: 'FILE SYSTEM',
    TYPE_MONGODB: 'MONGODB',
};

const config = {
    PORT: 8080,
    PERSISTENCE_TYPE: PERSISTENCE_TYPE.TYPE_MONGODB,    // 'MEM', 'FILE', 'MONGODB'
    // MONGODB_CONNECTION_STR: 'mongodb://localhost/ecommerce',
    MONGODB_CONNECTION_STR: 'mongodb+srv://NJL:HolaHola123@cluster0.xkjmyrv.mongodb.net/ecommerce?retryWrites=true&w=majority',
    MONGODB_TIMEOUT: 2000,  // Valor bajo para TESTING
};


export {PERSISTENCE_TYPE, config as default};