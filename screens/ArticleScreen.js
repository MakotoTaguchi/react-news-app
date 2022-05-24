import React from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { WebView } from "react-native-webview";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

ArticleScreen = ({ route }) => {
  const { article } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ url: article.url }} />
    </SafeAreaView>
  );
};

export default ArticleScreen;