import { connect } from "react-redux";
import { userState } from "../../../state-mgmt/user";

import { UserDetailsScreen } from "./UserDetailsScreen";

const mapStatesToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  createUser: user => dispatch(userState.actions.userCreateRequest(user)),
  updateUser: user => dispatch(userState.actions.userUpdateRequest(user)),
  resetUser: () => dispatch(userState.actions.resetUser())
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(UserDetailsScreen);
