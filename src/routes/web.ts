import { Router } from "express"
import { Application } from "express"
import { NextConfig } from "next"
import homeController from "../controllers/web/home.controller"

const router = Router();

export default (server: Application, app: NextConfig) => {
    const handle = app.getRequestHandler();

    router.get("/", (req, res) => (homeController(req, res, app)));

    router.get("/*", (req, res) => {
        return handle(req, res)
    })

    server.use("/", router)
};