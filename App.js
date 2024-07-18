import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Login from "./screen/Login";
import SignUp from "./screen/SignUp";
import Home from "./screen/Home";

const App = () => {
  const [currentView, setCurrentView] = useState("home");

  const renderComponent = () => {
    switch (currentView) {
      case "login":
        return <Login onSignupPress={() => setCurrentView("signup")} />;
      case "signup":
        return <SignUp onLoginPress={() => setCurrentView("login")} />;
      default:
        return <Home onLoginPress={() => setCurrentView("login")} />;
    }
  };

  return <View style={styles.container}>{renderComponent()}</View>;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
