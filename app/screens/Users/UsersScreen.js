import React, { useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { ScrollView, View, Text, Alert, TouchableOpacity } from "react-native";
import { Table, Row } from "react-native-table-component";
import { Icon, Fab } from "native-base";

import AppNavigationOptions from "../../navigation/NavigationOptions";
import AppHeader from "../../navigation/NavigationHeader";

// import Loading from "../../components/Loading/Loading";

import commonStyles from "../../styles";
import styles from "./UsersScreen.style";

import { COLORS, SCREENS } from "../../constants/application";

export const UsersScreen = ({ users, getUsers, navigation, deleteUser }) => {
  const { navigate } = navigation;
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const handleCreate = useCallback(() => {
    navigate(SCREENS.USER_DETAILS);
  }, [navigate]);

  const handleDelete = useCallback(
    id => {
      deleteUser(id);
    },
    [deleteUser]
  );

  const handleUpdate = useCallback(
    id => {
      const userSelected = users.data.find(user => user.id === id);
      navigate(SCREENS.USER_DETAILS, { userSelected });
    },
    [navigate, users.data]
  );

  const buttonElements = id => (
    <View style={styles.viewContainer}>
      <TouchableOpacity
        style={styles.btnTouch}
        onPress={() => handleDelete(id)}
      ></TouchableOpacity>
      <TouchableOpacity
        style={styles.btnTouch}
        onPress={() => handleUpdate(id)}
      ></TouchableOpacity>
    </View>
  );

  // if (!users && users.isFetching) {
  //   return <Loading />;
  // }

  if (!users || !users.data) {
    return (
      <View>
        <Text>No Users</Text>
      </View>
    );
  }

  if (users.deleted && users.receivedAt) {
    Alert.alert("Users", "DELETED!");
  }

  const tableHead = ["Name", "Email", ""];
  const widthArr = [150, 150, 50];
  const tableData =
    users &&
    users.data &&
    users.data.map(user => {
      return [user.name, user.email, buttonElements(user.id)];
    });

  return (
    <View style={commonStyles.formContainer}>
      <Text style={commonStyles.sectionTitle}>Users list</Text>
      {tableData.length > 0 ? (
        <ScrollView
          style={commonStyles.dataContainer}
          contentContainerStyle={styles.scrollViewContainer}
        >
          <Table borderStyle={{ borderColor: COLORS.GREY }}>
            <Row
              data={tableHead}
              style={styles.head}
              textStyle={styles.text}
              widthArr={widthArr}
            />
          </Table>
          <Table borderStyle={styles.tableBorder} autoFocus>
            {tableData.map((rowData, index) => (
              <Row
                key={index}
                data={rowData}
                widthArr={widthArr}
                style={[
                  styles.row,
                  index % 2 && { backgroundColor: COLORS.TABLE_ALTERNATIVE_ROW }
                ]}
                textStyle={styles.text}
              />
            ))}
          </Table>
        </ScrollView>
      ) : (
        <Text>Not data yet.</Text>
      )}
      <View style={styles.viewContainer}>
        <Fab
          active
          direction="up"
          containerStyle={{}}
          style={styles.createFAB}
          position="bottomRight"
          onPress={handleCreate}
        >
          <Icon ios="ios-add" android="md-add" />
        </Fab>
      </View>
    </View>
  );
};

UsersScreen.propTypes = {
  users: PropTypes.object,
  getUsers: PropTypes.func,
  deleteUser: PropTypes.func,
  navigation: PropTypes.object
};

const navigationOptions = () => {
  return {
    ...AppNavigationOptions,
    header: <AppHeader />
  };
};
UsersScreen.navigationOptions = navigationOptions;
