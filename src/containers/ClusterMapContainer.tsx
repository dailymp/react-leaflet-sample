import { connect } from 'react-redux';
import { State } from '../reducers';
import ClusterMap from '../components/ClusterMap';
import { addNewPointToMap } from '../actions/addNewPointToMap';
import { Point } from '../common/Point';

const mapStateToProps = (state: State) => ({
  pins: state.mapInfoReducer.pins,
});

const mapDispatchToProps = (dispatch) => ({
  onAddNewPoint: (newPoint: Point) => dispatch(addNewPointToMap(newPoint)),
});

const MapWidgetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClusterMap);

export default MapWidgetContainer;
