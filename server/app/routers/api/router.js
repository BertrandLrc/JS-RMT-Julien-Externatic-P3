const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const itemsRouter = require("./items/router");
const companiesRouter = require("./companies/router");

router.use("/items", itemsRouter);
router.use("/companies", companiesRouter);


const profilsRouter = require("./profils/router");

router.use("/profils", profilsRouter);

const offersRouter = require("./offers/router");

router.use("/offers", offersRouter);

const profilsRouter = require("./profils/router");

router.use("/profils", profilsRouter);

/* ************************************************************************* */

module.exports = router;
