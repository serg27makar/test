module.exports = {
    secret: "supersecretpassword",
    port: process.env.PORT || 4000,
    production: ((process.env.MODE_ENV === "production") ? true : false)
};
