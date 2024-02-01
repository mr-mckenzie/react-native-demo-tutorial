import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Dimensions,
  StatusBar,
} from "react-native";

function ItemScreen(props) {
  const dimensions = Dimensions.get("screen");

  StatusBar.setBarStyle("light-content");

  return (
    <SafeAreaView style={styles.itemPage}>
      <Image
        style={styles.itemImage}
        source={{
          width: "100%",
          height: "70%",
          uri: `https://picsum.photos/${Math.floor(
            dimensions.width
          )}/${Math.floor(0.7 * dimensions.height)}`,
        }}
      />
      <View style={styles.coralButton} />
      <View style={styles.aquaButton} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  itemPage: {
    flex: 1,
    backgroundColor: "black",
  },
  coralButton: {
    width: 50,
    height: 50,
    backgroundColor: "lightcoral",
    position: "absolute",
    top: 30,
    left: 20,
  },
  aquaButton: {
    width: 50,
    height: 50,
    backgroundColor: "darkturquoise",
    position: "absolute",
    top: 30,
    right: 20,
  },
  itemImage: {
    position: "absolute",
    top: 150,
  },
});

export default ItemScreen;
