module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9bec94d8149ce48dc77ef2272100a857'),
  },
});
