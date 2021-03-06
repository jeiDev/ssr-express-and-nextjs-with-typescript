import {Router} from "express";

import user from "./user.router";

const router = Router();

router.use("/users", user);

export default router;