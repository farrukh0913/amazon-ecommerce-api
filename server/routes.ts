export const routes = (app:any) =>{
    app.use("/api/login", require("./api/login"));
    app.use("/api/product", require("./api/products"));
    app.use("/api/supervisor", require("./api/supervisors"));
}