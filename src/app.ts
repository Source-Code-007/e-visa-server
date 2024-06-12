import express from "express";
import cors from "cors";
import "dotenv/config";
import { visaRouter } from "./module/visa/visa.route";
import { captchaRouter } from "./module/captcha/captcha.route";
import { globalErrHandler, notFoundErrHandler } from "./middleware/errHandler";
import { securityCodeRouter } from "./module/securityCode/securityCode.route";

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