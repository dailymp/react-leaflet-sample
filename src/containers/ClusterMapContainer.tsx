import { connect } from 'react-redux';
import { State } from '../reducers';
import ClusterMap from '../components/ClusterMap';

const mapStateToProps = (state: State) => {
  return {
    pins: state.mapInfoReducer.pins,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

const MapWidgetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClusterMap);

export default MapWidgetContainer;
