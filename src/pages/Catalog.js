import {ListGroup} from "react-bootstrap";
import {useNavigate} from "react-router";
import {ROUTE_CATALOG} from "../AppRouter/routes";


export const PageCatalog=()=>{
    const navigate=useNavigate();
    return (
        <>
            <h1 className={"my-3"}>Catalog page</h1>
            <ListGroup className={"col-sm-6 col-md-4 col-lg-3"}>
                <ListGroup.Item className={"item"} onClick={()=>navigate(ROUTE_CATALOG+"/crop")}>
                    <h3>Modify Image</h3>
                    <div>Click here to view "Modify image" micro task </div>
                </ListGroup.Item>
            </ListGroup>
        </>
    )
}
