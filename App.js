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
      <View style={{ width: 100, height: 100, backgroundColor: "gold" }} />
      <View style={{ width: 100, height: 130, backgroundColor: "crimson" }} />
      <View style={{ width: 100, height: 160, backgroundColor: "deeppink" }} />
      <View style={{ width: 100, height: 190, backgroundColor: "turquoise" }} />
      <View
        style={{ width: 100, height: 220, backgroundColor: "greenyellow" }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row", // the primary axis
    justifyContent: "center", //applies to the primary axis
    alignItems: "baseline", //applies to the secondary axis - each single line is aligned this way (in this case baseline aligned)
    flexWrap: "wrap",
    alignContent: "center", //applies to the content as a whole (all the content is centered)
    backgroundColor: "darkorange",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  text: {
    alignSelf: "center",
    color: "white",
  },
});
