import { SERVER } from "../MyServer";

class Config {


    public productsUrl = SERVER + "list_products/";
    public productsEditUrl = SERVER + "/product_detail/";
    public productsDelUrl = SERVER + "product_detail/";
    public productsDetailsUrl = SERVER + "product_detail/";
    public productsAddUrl = SERVER + "add_product/";
    public productImagesUrl = SERVER ;
    public registerUrl = SERVER + "register/";
    public loginUrl = SERVER + "login/";
}
const config = new Config();

export default config;
