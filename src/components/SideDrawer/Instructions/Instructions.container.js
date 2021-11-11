import React, {useEffect} from "react";
import { connect } from "react-redux";
import Instructions from "./Instructions.component";
import { getDocByPath } from "../../../utils/Query";
import { setInstructions } from "../../../store/Instructions/Instructions.action";
import { INSTRUCTIONS_PATH } from "./Instructions.config";

export const mapStateToProps = state => ({
    data: state.InstructionsReducer.data
});

export const mapDispatchToProps = dispatch => ({
    setInstructions: data => dispatch(setInstructions(data))
});

export const InstructionsContainer = ({ setInstructions, data }) => {

    useEffect(async () => {
        const data = await getDocByPath(INSTRUCTIONS_PATH);
        setInstructions(data.content)
    }, [])

    return (
        <Instructions content={ data } />
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(InstructionsContainer);