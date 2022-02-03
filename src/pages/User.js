import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getUser} from "../AppStore/selectors";
import {ListGroup} from "react-bootstrap";
import { logout} from "../AppStore/action";
import {Login} from "../components/Login";

export const PageUser=()=>{
    const dispatch=useDispatch();
    const activeUser=useSelector(getUser,shallowEqual);


    const handleClickLogout=()=>{
        dispatch(logout());
    }
    return (
        <div>
            {activeUser.role ?
                <>
                    <h3>User page</h3>
                    <ListGroup className={"col-sm-6 col-md-4 col-lg-3"}>
                        <ListGroup.Item>login : {activeUser.login}</ListGroup.Item>
                        <ListGroup.Item>name : {activeUser.name}</ListGroup.Item>
                        <ListGroup.Item>surname : {activeUser.surmane}</ListGroup.Item>
                        <ListGroup.Item>role : {activeUser.role}</ListGroup.Item>
                        <ListGroup.Item style={{cursor: "pointer"}}
                                        onClick={handleClickLogout}>
                            Logout
                        </ListGroup.Item>
                    </ListGroup>
                </>
                :
                <Login />
            }
        </div>
    )
}