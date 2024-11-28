import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useEffect } from "react";
import { MaterialContent, Comments } from "./components";
import { useParams } from "react-router-dom";
import { useServerRequest } from "../../hooks";
import { loadMaterialAsync } from "../../actions";
import { selectMaterial } from "../../selectors";

const PostContainer = ({className}) => {
    const dispatch = useDispatch();
    const params = useParams();
    const requestServer = useServerRequest();
    const material = useSelector(selectMaterial);

    useEffect(()=>{
        dispatch(loadMaterialAsync(requestServer, params.id))
    },[]);

    return(    
        <div className={className}>
            <MaterialContent material={material}/>
            <Comments comments={material.comments}/>
        </div>
    )
}

export const Post = styled(PostContainer)`    
`;