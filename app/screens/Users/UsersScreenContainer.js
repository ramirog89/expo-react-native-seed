import { connect } from "react-redux";
import { userState } from "../../state-mgmt/user";

import { UsersScreen } from "./UsersScreen";

const mapStatesToProps = state => ({
  users: state.user
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(userState.actions.usersRequest()),
  deleteUser: id => dispatch(userState.actions.userDeleteRequest(id))
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(UsersScreen);
