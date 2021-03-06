const route = require('express').Router();
const authJWT = require('../Helpers/Midellware/auth');
const profile = require('../controller/profile/profile');
const uploadRoutes = require('../controller/upload');
route
  .get('/', authJWT.authorization, authJWT.permitAdmin, profile.getDataProfile)
  .get('/tokenId', authJWT.authorization, profile.getDataProfileByTokenId) //, profile.getDataProfileByTokenId
  .get('/search', authJWT.authorization, profile.getDataProfileByName)
  .get('/:id', authJWT.authorization, profile.getDataProfileById)
  .post('/', authJWT.authorization, authJWT.permitAdmin, profile.setDataProfile)
  .put(
    '/:id',
    authJWT.authorization,
    authJWT.permitAdmin,
    profile.updateDataProfile
  )
  .patch('/', authJWT.authorization, profile.updatePatchDataProfile)
  .delete(
    '/:id',
    authJWT.authorization,
    authJWT.permitAdmin,
    profile.deleteDataProfile
  )
  .post('/upload', profile.uploadImg)
  .post('/upload', uploadRoutes.upload);

module.exports = route;
