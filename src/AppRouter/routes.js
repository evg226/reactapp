import {PageAdmin} from "../pages/Admin";
import {PageUser} from "../pages/User";
import {PageHome} from "../pages/Home";
import {PageAbout} from "../pages/About";
import {PageCatalog} from "../pages/Catalog";
import {PageCatalogItem} from "../pages/CatalogItem";

export const ROLE_ADMIN="ADMIN";
export const ROLE_USER="USER";

export const ROUTE_ADMIN="/admin";
export const ROUTE_USER="/user";
export const ROUTE_ABOUT="/about";
export const ROUTE_HOME="/";
export const ROUTE_CATALOG="/catalog";
export const ROUTE_LOGIN="/login"

export const appMap = [
    {
        path: ROUTE_ADMIN,
        Component:<PageAdmin />,
        name:"Admin",
        type:ROLE_ADMIN
    },
    {
        path: ROUTE_USER,
        Component:<PageUser />,
        name:"Personal",
        type:ROLE_USER
    },
    {
        path: ROUTE_HOME,
        Component: <PageHome />,
        name:"Home"
    },
    {
        path: ROUTE_ABOUT,
        Component:<PageAbout />,
        name:"About"
    },
    {
        path: ROUTE_LOGIN,
        Component: <PageUser action="login" />,
        name:"Login"
    },
    {
        path: ROUTE_CATALOG,
        Component: <PageCatalog />,
        name:"Catalog"
    },
    {
        path: ROUTE_CATALOG+"/:id",
        Component:<PageCatalogItem />,
        name:"Catalog Item"
    }
];


