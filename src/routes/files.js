const path = require('path');

const rootDir = process.cwd();

const homePage = path.join(rootDir, 'public/index.html');
const newPage = path.join(rootDir, 'public/new.html');
const listPage = path.join(rootDir, 'public/list.html');

module.exports = {
    homePage,
    newPage,
    listPage
}