import {useParams} from "react-router";
import {ImageCanvas} from "../components/ImageCanvas";

export const PageCatalogItem=()=>{
    const {id}=useParams()
    // if (!id) return null;

    return (
        <div className={"page"}>
            <h3 className={"my-3"}>Welcome to {id} page</h3>
            {id==="crop"&& <ImageCanvas />}
        </div>
    )
}