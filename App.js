import { StatusBar } from "expo-status-bar";
import { useDeviceOrientation } from "@react-native-community/hooks";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Button,
  Alert,
  Platform,
  Dimensions,
} from "react-native";

export default function App() {
  const handlePress = () => console.log("Text clicked!");

  console.log(Dimensions.get("screen"));
  console.log(useDeviceOrientation());

  const orientation = useDeviceOrientation();
  console.log("Orientation is " + orientation);

  return (
    <SafeAreaView style={styles.container}>
      {/* <View
        style={{
          width: orientation === "landscape" ? "100%" : "90%",
          height: orientation === "landscape" ? "100%" : "30%",
          backgroundColor: "darkorange",
        }}
      >
        <Text style={styles.text}>ORANGE</Text>
      </View> */}
      {/* <TouchableOpacity onPress={() => console.log("Image tap!")}>
        <Image
          source={{
            width: 400,
            height: 400,
            uri: "https://picsum.photos/401",
          }}
        />
      </TouchableOpacity> */}
      {/* <Image source={require('./assets/splash.png')}></Image> */}
      {/* <Text numberOfLines={5} onPress={handlePress}>
        Hello World!
      </Text>
      <Button
        title="Do not press"
        color={"darkorange"}
        onPress={() =>
          Alert.alert("WARNING!", "I told you not to press that...", [
            { text: "Run away", onPress: () => console.log("You ran away.") },
            {
              text: "Do nothing",
              onPress: () => console.log("You did nothing."),
            },
          ])
        }
      ></Button> */}
      {/* <StatusBar style="auto" /> */}
      <View style={{ flex: 2, backgroundColor: "lightgreen" }} />
      <View style={{ flex: 1, backgroundColor: "tomato" }} />
      <View style={{ flex: 1, backgroundColor: "skyblue" }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  text: {
    alignSelf: "center",
    color: "white",
  },
});
