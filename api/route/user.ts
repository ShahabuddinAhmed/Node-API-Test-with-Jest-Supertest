import * as express from 'express'
const router = express.Router();
import * as userController from '../controller/user'

router.get('/', userController.getUser);
router.post('/', userController.postUser);

module.exports = router;