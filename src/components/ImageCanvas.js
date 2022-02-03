import React, {useCallback, useEffect, useState} from 'react';
import {Form, Button, Image, Dropdown} from "react-bootstrap";
import Cropper from "react-easy-crop";
import getCroppedImg from "./imageCropUtils";

export const ImageCanvas=()=> {
    const [image,setImage]=useState(null);

    const [canvasStart,setCanvasStart]=useState({x:0,y:0})
    const [canvasX,setCanvasX]=useState(300 );
    const [canvasY,setCanvasY]=useState(300);

    const [aspectX,setAspectX]=useState(1);
    const [aspectY,setAspectY]=useState(4);
    const [cropWidth,setCropWidth]=useState(0);
    const [cropHeight,setCropHeight]=useState(0);
    const [shape,setShape]=useState("rect");

    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);

    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
    const [croppedImage, setCroppedImage] = useState(null);

    const handleLoadImg =(e)=>{
        setCroppedImage(null);
        if (e.target.files[0])
            setImage(URL.createObjectURL(e.target.files[0]))
        else
            setImage(null);
    }

    const handleMediaLoaded =(e)=>{
        const maxHeight=document.documentElement.offsetHeight-350;
        const maxWidth=document.documentElement.offsetWidth-50;
        const width=e.naturalHeight>maxHeight?maxHeight:e.naturalHeight;
        const height=e.naturalWidth>maxWidth?maxWidth:e.naturalHeight
        setCanvasX(height);
        setCanvasY(width);
        setCropWidth(Math.floor(width*0.9));
        setCropHeight(Math.floor(height*0.9));
        setAspectX(prev=>prev===1?2:prev-1);
    }

    const handleChangeCanvasX =  (e)=>{
        setCropWidth(0);
        setAspectX(prev=>prev===1?2:prev-1);
        setCanvasX(parseInt(e.target.value));
    }

    const handleChangeCanvasY =  (e)=>{
        setAspectY(prev=>prev===1?2:prev-1);
        setCropHeight(0);
        setCanvasY(parseInt(e.target.value));
    }

    const handleChangeAspectX = e =>{
        setCropWidth(0);
        setAspectX(e.target.value>0?e.target.value:1);
    }

    const handleChangeAspectY = e =>{
        setCropHeight(0);
        setAspectY(e.target.value>0?e.target.value:1);
    }

    const handleChangeCropWidth = e=>{
        setCropWidth(e.target.value>0.9*canvasX?Math.floor(canvasX*0.9):e.target.value);
    }

    const handleChangeCropHeight = e=>{
        setCropHeight(e.target.value>0.9*canvasY?Math.floor(canvasY*0.9):e.target.value);
    }

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const showCroppedImage = useCallback(async (e) => {
        e.preventDefault();
        try {
            const croppedImage = await getCroppedImg(
                image,
                croppedAreaPixels,
                // rotation
            )
            setImage(null);
            setCroppedImage(croppedImage);
        } catch (e) {
            console.error(e);
        }
    }, [croppedAreaPixels]);

    useEffect(() => {
        return setCroppedImage(null);
    }, [])

    return (
        <>
            <div className={"d-flex flex-wrap"}>
                <Form className={"my-2 d-flex align-items-start"}
                  onSubmit={showCroppedImage}>
                <Form.Group >
                    <Form.Control type="file" accept="image/png, image/gif, image/jpeg"
                                  onChange={handleLoadImg}/>
                    <Form.Text className="text-muted">
                        Choose your image
                    </Form.Text>
                </Form.Group>
                {image &&
                    <Button  className={"ms-2 px-4"} variant="secondary" type="submit">Save</Button>
                }
                </Form>
                {image &&
                    <Form className={"my-2 d-flex align-items-start"}>
                        <Form.Group className="ms-2">
                            <Form.Control className={"p-1"} style={{maxWidth: "40px"}} type="text"
                                          value={canvasX}
                                          onFocus={(e)=>e.target.select()}
                                          onChange={handleChangeCanvasX}/>
                            <Form.Text className="text-muted">Width</Form.Text>
                        </Form.Group>
                        <Form.Group className="ms-1">
                            <Form.Control className={"p-1"} style={{maxWidth: "40px"}} type="text"
                                          value={canvasY}
                                          onFocus={(e)=>e.target.select()}
                                          onChange={handleChangeCanvasY}/>
                            <Form.Text className="text-muted">Height</Form.Text>
                        </Form.Group>
                        <Form.Group className="ms-1" style={{width: "100px"}}>
                            <Form.Select
                                value={shape} className={"p-1"}
                                onChange={(e) => setShape(e.target.value)}>
                                <option value="rect">Rect</option>
                                <option value="round">Round</option>
                            </Form.Select>
                            <Form.Text className="text-muted">Shape</Form.Text>
                        </Form.Group>
                        <Form.Group className="ms-2">
                            <Form.Control style={{maxWidth: "35px"}} type="text" value={aspectX}
                                          className={"p-1"}
                                          onFocus={(e)=>e.target.select()}
                                          onChange={handleChangeAspectX}/>
                            <Form.Text className="text-muted">kX</Form.Text>
                        </Form.Group>
                        <Form.Group className="ms-1">
                            <Form.Control style={{maxWidth: "35px"}} type="text" value={aspectY}
                                          className={"p-1"}
                                          onFocus={(e)=>e.target.select()}
                                          onChange={handleChangeAspectY}/>
                            <Form.Text className="text-muted">kY</Form.Text>
                        </Form.Group>
                        <Form.Group className="ms-2">
                            <Form.Control style={{maxWidth: "45px"}} type="text" value={cropWidth}
                                          className={"p-1"}
                                          onFocus={(e)=>e.target.select()}
                                          onChange={handleChangeCropWidth}/>
                            <Form.Text className="text-muted">CropW</Form.Text>
                        </Form.Group>
                        <Form.Group className="ms-1">
                            <Form.Control style={{maxWidth: "45px"}} type="text" value={cropHeight}
                                          className={"p-1"}
                                          onFocus={(e)=>e.target.select()}
                                          onChange={handleChangeCropHeight}/>
                            <Form.Text className="text-muted">CropH</Form.Text>
                        </Form.Group>
                    </Form>
                }
            </div>
            {croppedImage&&<a className={"text-secondary text-decoration-none"} href={croppedImage} download>
                <h5>Your cropped image is</h5>
                <img src={croppedImage}/>
                <div>Download now >></div>
            </a>}
            {image &&
                    <div style={{width:canvasX,height:canvasY}} className={"image-box"}
                         onDrag={e=> {
                             const width=e.clientX-canvasStart.x;
                             const height=e.clientY-canvasStart.y;
                             if(width>0){
                                 setCanvasX(Math.floor(width));
                                 setCropWidth(Math.floor(width*0.9));
                             }
                             if(height>0){
                                 setCanvasY(Math.floor(height));
                                 setCropHeight(Math.floor(height*0.9));
                             }
                             // setAspectX(prev=>prev===1?2:prev-1);

                         }}
                        >

                        <Cropper
                                image={image}
                                crop={crop}
                                zoom={zoom}
                                cropShape={shape}
                                cropSize={(cropWidth&&cropHeight)?({width:parseInt(cropWidth),height:parseInt(cropHeight)}):null}
                                aspect={aspectX / aspectY}
                                onCropChange={setCrop}
                                onCropComplete={onCropComplete}
                                onZoomChange={setZoom}
                                onMediaLoaded={handleMediaLoaded}
                                objectFit={"horizontal-cover"}
                                children={()=><div className={"111"}>111</div>}
                            />
                        {/*<div className={"point point-left-top"}></div>*/}
                        {/*<div className={"point point-left-bottom"}></div>*/}
                        {/*<div className={"point  point-right-top"}></div>*/}
                        <div className={"point  point-right-bottom"}
                             draggable={"true"}
                             onDragStart={(e)=>{
                                 const parentStart=e.target.parentNode.getBoundingClientRect();
                                 setCanvasStart({x:parentStart.left,y:parentStart.top});
                             }}
                        ></div>
                </div>
            }
        </>
    );
}


