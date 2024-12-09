import React, { useLayoutEffect } from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  Dimensions,
  TouchableHighlight,
} from "react-native";
import { StyleSheet } from "react-native";
import {
  getIngredientName,
  getCategoryName,
  getCategoryById,
} from "../../data/MockDataAPI";
import BackButton from "../../components/BackButton/BackButton";
import ViewIngredientsButton from "../../components/ViewIngredientsButton/ViewIngredientsButton";

const { width: viewportWidth } = Dimensions.get("window");

export default function RecipeScreen(props) {
  const { navigation, route } = props;
  const item = route.params?.item;
  const category = getCategoryById(item.categoryId);
  const title = getCategoryName(category.id);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: "true",
      headerLeft: () => (
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, [navigation]);

  const onPressIngredient = (item) => {
    const name = getIngredientName(item);
    navigation.navigate("Ingredient", { ingredient: item, name });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: item.photo_url }} // Display the single photo
        />
      </View>

      <View style={styles.infoRecipeContainer}>
        <Text style={styles.infoRecipeName}>{item.title}</Text>
        <View style={styles.infoContainer}>
          <TouchableHighlight
            onPress={() =>
              navigation.navigate("RecipesList", { category, title })
            }
          >
            <Text style={styles.category}>
              {getCategoryName(item.categoryId).toUpperCase()}
            </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.infoContainer}>
          <Image
            style={styles.infoPhoto}
            source={require("../../../assets/icons/time.png")}
          />
          <Text style={styles.infoRecipe}>{item.time} minutes</Text>
        </View>

        <View style={styles.infoContainer}>
          <ViewIngredientsButton
            onPress={() => {
              const ingredients = item.ingredients;
              const title = "Ingredients for " + item.title;
              navigation.navigate("IngredientsDetails", { ingredients, title });
            }}
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  imageContainer: {
    width: viewportWidth,
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  infoRecipeContainer: {
    flex: 1,
    margin: 25,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 10,
  },
  infoPhoto: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  infoRecipe: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 5,
  },
  category: {
    fontSize: 14,
    fontWeight: "bold",
    margin: 10,
    color: "#2cd18a",
  },
  infoDescriptionRecipe: {
    textAlign: "left",
    fontSize: 16,
    marginTop: 30,
    margin: 15,
  },
  infoRecipeName: {
    fontSize: 28,
    margin: 10,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
});
// import React, { useLayoutEffect } from "react";
// import {
//   ScrollView,
//   Text,
//   View,
//   Dimensions,
//   StyleSheet,
//   Image,
// } from "react-native";
// import Carousel from "react-native-reanimated-carousel";
// import {
//   getIngredientName,
//   getCategoryName,
//   getCategoryById,
// } from "../../data/MockDataAPI";
// import BackButton from "../../components/BackButton/BackButton";
// import ViewIngredientsButton from "../../components/ViewIngredientsButton/ViewIngredientsButton";

// const { width: viewportWidth } = Dimensions.get("window");

// export default function RecipeScreen(props) {
//   const { navigation, route } = props;
//   const item = route.params?.item;
//   const category = getCategoryById(item.categoryId);
//   const title = getCategoryName(category.id);

//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerTransparent: true,
//       headerLeft: () => (
//         <BackButton
//           onPress={() => {
//             navigation.goBack();
//           }}
//         />
//       ),
//       headerRight: () => <View />,
//     });
//   }, [navigation]);

//   const onPressIngredient = (ingredient) => {
//     const name = getIngredientName(ingredient);
//     navigation.navigate("Ingredient", { ingredient, name });
//   };

//   return (
//     <ScrollView style={styles.container}>
//       {/* Carousel */}
//       <View style={styles.carouselContainer}>
//         <Carousel
//           width={viewportWidth}
//           height={viewportWidth * 0.75}
//           data={item.photosArray} // Array of photos
//           renderItem={({ item: photo }) => (
//             <View style={styles.carouselItem}>
//               <Image source={{ uri: photo }} style={styles.carouselImage} />
//             </View>
//           )}
//           loop={false}
//           autoPlay={false}
//         />
//       </View>

//       {/* Recipe Info */}
//       <View style={styles.infoRecipeContainer}>
//         <Text style={styles.infoRecipeName}>{item.title}</Text>
//         <View style={styles.infoContainer}>
//           <Text
//             style={styles.category}
//             onPress={() =>
//               navigation.navigate("RecipesList", { category, title })
//             }
//           >
//             {getCategoryName(item.categoryId).toUpperCase()}
//           </Text>
//         </View>

//         <View style={styles.infoContainer}>
//           <Image
//             style={styles.infoPhoto}
//             source={require("../../../assets/icons/time.png")}
//           />
//           <Text style={styles.infoRecipe}>{item.time} minutes</Text>
//         </View>

//         <View style={styles.infoContainer}>
//           <ViewIngredientsButton
//             onPress={() => {
//               const ingredients = item.ingredients;
//               const title = `Ingredients for ${item.title}`;
//               navigation.navigate("IngredientsDetails", { ingredients, title });
//             }}
//           />
//         </View>

//         <View style={styles.infoContainer}>
//           <Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "white",
//     flex: 1,
//   },
//   carouselContainer: {
//     width: viewportWidth,
//     height: viewportWidth * 0.75,
//   },
//   carouselItem: {
//     width: "100%",
//     height: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   carouselImage: {
//     width: "100%",
//     height: "100%",
//     borderRadius: 10,
//   },
//   infoRecipeContainer: {
//     flex: 1,
//     margin: 25,
//     marginTop: 20,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   infoContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "flex-start",
//     marginBottom: 10,
//   },
//   infoPhoto: {
//     height: 20,
//     width: 20,
//     marginRight: 10,
//   },
//   infoRecipe: {
//     fontSize: 14,
//     fontWeight: "bold",
//     marginLeft: 5,
//   },
//   category: {
//     fontSize: 14,
//     fontWeight: "bold",
//     margin: 10,
//     color: "#2cd18a",
//   },
//   infoDescriptionRecipe: {
//     textAlign: "left",
//     fontSize: 16,
//     marginTop: 30,
//     margin: 15,
//   },
//   infoRecipeName: {
//     fontSize: 28,
//     margin: 10,
//     fontWeight: "bold",
//     color: "black",
//     textAlign: "center",
//   },
// });
