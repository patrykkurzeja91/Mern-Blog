const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://mernuser:mongo123456789@ds161780.mlab.com:61780/mern-blog',
  port: process.env.PORT || 8000,
};

export default config;
