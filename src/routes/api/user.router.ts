import {Router} from "express";
import controllers from "../../controllers/api/index"

const userController = controllers.user;
const router = Router();

router.get("/", userController.get);

export default router;