import { Request, Response } from "express";
import { usersMock } from "../../../__mock__/user.mock";

export default (req: Request, res: Response) => {
    return res.json(usersMock);
}