import {Request, Response} from "express"
import { NextConfig } from "next"

export default (req: Request, res: Response, app: NextConfig) => {
    return app.render(req, res, "/index", {
        name: "jei"
    });
}