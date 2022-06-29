import {Application} from "express";
import {NextConfig} from "next";
import web from "./web";
import api from "./api";

export default (server: Application, app: NextConfig) => {
    server.use("/api", api);
    web(server, app)
}