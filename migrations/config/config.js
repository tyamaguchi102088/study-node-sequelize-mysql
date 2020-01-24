import config from './../../config';

const env = process.env.NODE_ENV || 'development';

module.exports = config.db[env];