import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {ListGroup} from "react-bootstrap";
import {getUser} from "../AppStore/selectors";
import {ROLE_USER,ROLE_ADMIN} from "../AppRouter/routes";
import {login} from "../AppStore/action";

export const Login=()=>{
    const dispatch=useDispatch();
    const activeUser=useSelector(getUser,shallowEqual);
    return (
        <div>
            <h3>Login page</h3>
            <ListGroup horizontal={"sm"}>
                {activeUser.role!==ROLE_USER &&
                    <ListGroup.Item style={{cursor: "pointer"}}
                                    onClick={()=>dispatch(login({login:"User"}))}>
                        Login User
                    </ListGroup.Item>}
                {activeUser.role!==ROLE_ADMIN &&
                    <ListGroup.Item style={{cursor: "pointer"}}
                                    onClick={()=>dispatch(login({login:"Admin"}))}>
                        Login Admin
                    </ListGroup.Item>}
            </ListGroup>
        </div>
    )
}