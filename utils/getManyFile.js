module.exports = function getManyFile (filename, cb) {
    for (let i =0; i < 4; i++){
        setTimeout(() => {
            cb(null, `File contents of ${filename}`)
        }, Math.random() * 1500);
    
    }
};