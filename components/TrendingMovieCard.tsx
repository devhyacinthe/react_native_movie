import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const TrendingMovieCard = ({
  movie: { id, title, poster_path },
  index,
}: any) => {
  return (
    <Link
      href={{
        pathname: "/movies/[id]",
        params: {
          id: id,
        },
      }}
      asChild
    >
      <TouchableOpacity className="w-32 relative pl-5">
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "https://placehold.co/600x400/1a1a1a/ffffff.png",
          }}
          className="w-32 h-48 rounded-lg"
          resizeMode="cover"
        />

        <View className="absolute bottom-9 -left-3.5 px-2 py-1 rounded-full">

        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default TrendingMovieCard;
