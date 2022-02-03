import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {getAlert} from "../AppStore/selectors";
import {hideAlert} from "../AppStore/action";
import {Button,Alert} from "react-bootstrap";


export const AlertShow=()=>{
    const dispatch=useDispatch();
    const alert=useSelector(getAlert,shallowEqual);
    // const [show, setShow] = useState(true);

    // const variant=['primary','secondary','success','danger','warning','info','light','dark'];
    const variant=alert.variant;
    const show=alert.visible;
    const message=alert.message;
    const setHide=()=>{
        dispatch(hideAlert());
    }

    return (
         <div className={"position-absolute top-0 end-0"} >
            <Alert show={show} variant={variant}  className={"p-2 m-1 d-flex justify-content-center"} >
                {/*<Alert.Heading>How's it going?!</Alert.Heading>*/}
                <p className={"mb-1 me-2 fs-6"}>
                    {message}
                </p>
                <Button className={"m-0 py-0 px-2 fs-6"} onClick={setHide} variant={`${variant}` }>
                        X
                    </Button>
            </Alert>

            {/*{!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}*/}
         </div>
    );
}