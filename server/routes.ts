export const routes = (app:any) =>{
    app.use("/api/login", require("./api/login"));
}