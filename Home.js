import { StatusBar } from "expo-status-bar";
import { useDeviceOrientation } from "@react-native-community/hooks";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  Dimensions,
} from "react-native";

export default function Home() {
  const handlePress = () => console.log("Text clicked!");

  dimensions = Dimensions.get("screen");

  console.log(dimensions);
  console.log(useDeviceOrientation());

  const orientation = useDeviceOrientation();
  console.log("Orientation is " + orientation);

  return (
    <View style={styles.container}>
      <Image
        source={{
          width: "100%",
          height: "80%",
          uri: `https://picsum.photos/${Math.trunc(
            0.8 * dimensions.width
          )}/${Math.trunc(dimensions.height)}`,
        }}
      />
      <View style={styles.logo}>
        <Image
          source={{
            width: 125,
            height: 125,
            uri: "https://picsum.photos/300",
          }}
        />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={[styles.button, styles.coral]}></View>
      <View style={[styles.button, styles.aqua]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column", // the primary axis
    justifyContent: "flex-start", //applies to the primary axis
    // alignItems: "baseline", //applies to the secondary axis - each single line is aligned this way (in this case baseline aligned)
    alignContent: "center", //applies to the content as a whole (all the content is centered)
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  logo: {
    position: "absolute",
    top: "10%",
    flex: 1,
    alignItems: "center",
    alignSelf: "center",
  },
  button: {
    width: "100%",
    height: "10%",
    backgroundColor: "red",
  },
  coral: {
    backgroundColor: "lightcoral",
  },
  aqua: {
    backgroundColor: "darkturquoise",
  },
});
