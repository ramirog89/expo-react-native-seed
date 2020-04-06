import React, { useEffect, useState, useCallback } from "react";
import { ScrollView, TextInput, View, Alert, Text } from "react-native";
import PropTypes from "prop-types";
import { Icon, Fab } from "native-base";

import AppNavigationOptions from "../../../navigation/NavigationOptions";
import AppHeader from "../../../navigation/NavigationHeader";

import { FIELDS, SCREENS } from "../../../constants/application";

import commonStyles from "../../../styles/index";

export const UserDetailsScreen = ({ navigation, users, createUser, updateUser, resetUser  }) => {
    useEffect(() => {
       return () => {
           resetUser();
       }
    }, []);

    const {navigate, getParam} = navigation;
    const user = getParam("userSelected", null);
    const [userFields, setUserFieldValues] = useState({
        id: (user && user.id) || "",
        name: (user && user.name) || "",
        email: (user && user.email) || "",
        phone: (user && user.phone) || "",
        skype: (user && user.skype) || "undefined"
    });

    const handleConfirm = useCallback(() => {
        if (!userFields.name && !userFields.email) {
            Alert.alert("Users", "You must enter a name or email.");
            return;
        }

        const userActionCallback = user ? updateUser : createUser;
        userActionCallback(userFields);
    }, []);

    const handleCancel = useCallback(() => {
        navigate(SCREENS.USERS);
    }, []);

    const updateField = useCallback((userField, value) => {
        setUserFieldValues({
            ...userFields,
            [userField]: value
        });
    },[]);

    if (users.updated && users.receivedAt) {
        const actionForMessage = user ? "updated" : "created";

        Alert.alert("Chat", `User ${actionForMessage} success!`, [
            {text: "OK", onPress: () => navigate(SCREENS.USERS)}
        ]);
    }

    if (!users.updated && users.error) {
        Alert.alert("Fail to create User", users.errorMessage);
    }

    return (
        <View style={commonStyles.formContainer}>
            <ScrollView>
                <Text style={commonStyles.sectionTitle}>User</Text>
                <View style={commonStyles.inputContainer}>
                    <TextInput
                        id={FIELDS.NAME}
                        name={FIELDS.NAME}
                        style={commonStyles.inputField}
                        placeholder="Enter your name"
                        autoFocus
                        autoCompleteType="name"
                        autoCapitalize="none"
                        value={userFields.name}
                        onChangeText={value => updateField(FIELDS.NAME, value)}
                    />
                </View>
                <View style={commonStyles.inputContainer}>
                    <TextInput
                        id={FIELDS.EMAIL}
                        name={FIELDS.EMAIL}
                        style={commonStyles.inputField}
                        autoCompleteType="email"
                        autoCapitalize="none"
                        placeholder="Enter your email"
                        value={userFields.email}
                        onChangeText={value => updateField(FIELDS.EMAIL, value)}
                    />
                </View>
                <View style={commonStyles.inputContainer}>
                    <TextInput
                        id={FIELDS.PHONE}
                        name={FIELDS.PHONE}
                        autoCompleteType="tel"
                        style={commonStyles.inputField}
                        placeholder="Enter your phone"
                        value={userFields.phone}
                        onChangeText={value => updateField(FIELDS.PHONE, value)}
                    />
                </View>
            </ScrollView>
            <View style={commonStyles.viewContainer}>
                <Fab
                    active
                    direction="up"
                    containerStyle={{}}
                    style={commonStyles.closeFAB}
                    position="bottomLeft"
                    onPress={handleCancel}
                >
                    <Icon ios="ios-close" android="md-close"/>
                </Fab>
                <Fab
                    active
                    direction="up"
                    containerStyle={{}}
                    style={commonStyles.checkFAB}
                    position="bottomRight"
                    onPress={handleConfirm}
                >
                    <Icon ios="ios-checkmark" android="md-checkmark"/>
                </Fab>
            </View>
        </View>
    );
};

UserDetailsScreen.propTypes = {
    navigation: PropTypes.object,
    users: PropTypes.object,
    createUser: PropTypes.func,
    updateUser: PropTypes.func,
    resetUser: PropTypes.func
};

const navigationOptions = ({ navigation}) => {
  const handleBack = () => {
    navigation.navigate("Users");
  };

  return {
    ...AppNavigationOptions,
    header: <AppHeader onBack={handleBack} />
  };
};
UserDetailsScreen.navigationOptions = navigationOptions;
