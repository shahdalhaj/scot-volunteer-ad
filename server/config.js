const config = {
	development: {
		user: "postgres",
		host: "localhost",
		database: "volunteer_ad",
		password: "12345",
		port: 5432,
	},
	production: {
		connectionString: process.env.DATABASE_URL,
	},
};

const env = process.env.NODE_ENV || "development";

module.exports = config[env];
