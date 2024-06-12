import express from "express";
import cors from "cors";
import "dotenv/config";
import { captchaRouter } from "./app/module/captcha/captcha.route";
import { visaRouter } from "./app/module/visa/visa.route";
import { securityCodeRouter } from "./app/module/securityCode/securityCode.route";
import { globalErrHandler, notFoundErrHandler } from "./app/middleware/errHandler";


const app = express();


// Parser
app.use(cors())
app.use(express.json())


// Router
app.use('/api/v1/captcha', captchaRouter)
app.use('/api/v1/visa', visaRouter)
app.use('/api/v1/securityCode', securityCodeRouter)


app.use(notFoundErrHandler)
app.use(globalErrHandler)


export default app