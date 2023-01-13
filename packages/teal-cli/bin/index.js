#!/usr/bin/env node
const importLocal = require('import-local');
if (importLocal(__filename)) {
    console.log(__filename);
} else {
    require('../dist/index');
}
