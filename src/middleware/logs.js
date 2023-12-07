const logRequest = (req, res, next) => {
    console.log('Terjadi log ke PATH:', req.path)  
    next()
}

module.exports =  logRequest