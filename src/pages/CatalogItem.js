import {useParams} from "react-router";


export const PageCatalogItem=()=>{
    const {id}=useParams()
    // if (!id) return null;

    return (
        <div className={"page"}>
            <h3 className={"my-3"}>Welcome to {id} page</h3>

        </div>
    )
}