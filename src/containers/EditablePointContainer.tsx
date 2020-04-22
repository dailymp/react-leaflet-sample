import { State } from "../reducers";
import { Point } from "../common/Point";
import { setPointData } from "../actions/setPointData";
import { connect } from "react-redux";
import { AllEditablePoints } from "../components/EditablePoint/AllEditablePoint";

const mapStateToProps = (state: State) => ({
    pins: state.mapInfoReducer.pins,
});

const mapDispatchToProps = (dispatch) => ({
    onEditPins: (newPins: Point[]) => dispatch(setPointData(newPins)),
});

export const AllEditablePointsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(AllEditablePoints)