import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Link from '../components/Link';

const FilterLink = connect(
  (state, ownProps) => ({ // mapStateToProps
    active: ownProps.filter === state.visibilityFilter 
  }),
  (dispatch, ownProps) => ({ // mapDispatchToProps
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  })
)(Link);

export default FilterLink
