import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useWarmUpBrowser } from "@/hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: 100,
        }}
      >
        <Image
          source={require("./../assets/images/flat-design-cryptocurrencies-app-template.png")}
          style={{
            width: 240,
            height: 400,
            borderRadius: 20,
            borderWidth: 3,
            borderColor: "black",
          }}
        />
      </View>

      <View
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 20,
            alignItems: "center",
            fontWeight: "bold",
            color: Colors.primary,
            textAlign: "center",
            padding: 20,
          }}
        >
          Welcome to My-React-Native-project
        </Text>

        <Text
          style={{
            display: "flex",
            fontFamily: "outfit",
            fontSize: 13,
            alignItems: "center",
            color: "gray",
            textAlign: "center",
            padding: 20,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat qui,
          iusto eaque deleniti eligendi.
        </Text>
      </View>

      <TouchableOpacity onPress={onPress}>
        <Text
          style={{
            backgroundColor: Colors.primary,
            color: "white",
            fontFamily: "outfit",
            fontSize: 20,
            alignItems: "center",
            textAlign: "center",
            padding: 10,
            borderRadius: 50,
            width: 200,
            alignSelf: "center",
            marginTop: 20,
          }}
        >
          Let's Start
        </Text>
      </TouchableOpacity>
    </View>
  );
}
