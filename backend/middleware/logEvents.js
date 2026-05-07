// const fsPromises = require('fs').promises;
// const path = require('path');
// const os = require('os');

// console.log(path.parse(__filename));

// console.log('phat');

// const fileOps = async () => {
//     try {
//         const data = await fsPromises.readFile(path.join(__dirname, 'files', 'text.txt'));
//         console.log(data.toString());
//     }
//     catch (err) {
//         console.error(f`Error: ${err}`)
//     }    
// };

// fileOps();

const { format } = require('date-fns');
const { v4: uuid }= require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');
const { fileURLToPath } = require('url');

const logEvents = async (message, logName) => {
    const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
    console.log(logItem);
    try {
        if (!fs.existsSync(path.join(__dirname, '..' , 'logs'))) {
            await fsPromises.mkdir(path.join(__dirname, '..' , 'logs'));
        }
        await fsPromises.appendFile(path.join(__dirname, '..' , 'logs', logName), logItem);
    } catch (err) {
        console.log(err);
    }

}


const logger = (req, res, next) => {
    logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, 'reqLog.txt');
    console.log(`${req.method} ${req.path}`);
    next();
}

module.exports = {logger, logEvents};
