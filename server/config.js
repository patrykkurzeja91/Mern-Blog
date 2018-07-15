const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://patraspan:mongodbPass123456789@ds161780.mlab.com:61780/mern-blog' || 'mongodb://localhost:27017/mern-starter',
  port: process.env.PORT || 8000,
};

export default config;
