import React, {useEffect} from "react";
import { connect } from "react-redux";
import Instructions from "./Instructions.component";
import { getDocFieldByPath } from "../../../utils/Query";
import { setInstructions } from "../../../store/Instructions/Instructions.action";
import {
    COLLECTION_PATH,
    DOCUMENT_PATH,
    INSTRUCTION_FIELD_NAME,
} from './Instructions.config';

export const mapStateToProps = state => ({
    data: state.InstructionsReducer.data
});

export const mapDispatchToProps = dispatch => ({
    setInstructions: data => dispatch(setInstructions(data))
});

export const InstructionsContainer = ({ setInstructions, data }) => {

    useEffect(async () => {
        const data = await getDocFieldByPath(COLLECTION_PATH, DOCUMENT_PATH, INSTRUCTION_FIELD_NAME);
        setInstructions(data)
    }, [])

    return (
        <Instructions content={ data } />
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(InstructionsContainer);