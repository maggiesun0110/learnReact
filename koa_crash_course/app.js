//import like express
//create app like express too
const koa = require("koa");
const app = new koa();
const koaRouter = require("koa-router");
const path = require("path");
const render = require("koa-ejs");

const router = new koaRouter();

//reaplce with db
const things = ["coding", "food", "music"];

//middleware = for every incoming req, run this function so everytime someone hits server, it runs no matter the route
//ctx = request info, response info, headers, body, status code, params, etc
// app.use(async ctx => ctx.body = {msg: "hello world"});

//render
render(app, {
    root: path.join(__dirname, "views"),
    layout: "layout",
    viewExt: "html",
    cache: false,
    debug: false
})

//index page route
router.get("/",async ctx => {
    await ctx.render("index", {
        title: "things i love",
        things: things
    })
})

//routes
router.get("/test", ctx=>(ctx.body = {msg: "this is a test route"}));

//router middleware
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000,() => console.log("server is running on port 3000"));