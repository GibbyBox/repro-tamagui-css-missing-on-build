import "@/css/global-css-imports";
import "react-native-reanimated";
import { useColorScheme } from "@/components/useColorScheme";
import {
	AcmeThemeProvider,
	AcmeFonts,
	NavigationThemeDark,
	NavigationThemeLight,
} from "@acme/ui";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { ThemeProvider as NavigationThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
	// Ensure that reloading on `/modal` keeps a back button present.
	initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const [loaded, error] = useFonts({
		...AcmeFonts,
		...FontAwesome.font,
	});

	// Expo Router uses Error Boundaries to catch errors in the navigation tree.
	useEffect(() => {
		if (error) throw error;
	}, [error]);

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return <RootLayoutNav />;
}

function RootLayoutNav() {
	const colorScheme = useColorScheme() ?? "light";

	return (
		<AcmeThemeProvider defaultTheme={colorScheme}>
			<NavigationThemeProvider
				value={
					colorScheme === "dark" ? NavigationThemeDark : NavigationThemeLight
				}
			>
				<Stack>
					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
					<Stack.Screen name="modal" options={{ presentation: "modal" }} />
				</Stack>
			</NavigationThemeProvider>
		</AcmeThemeProvider>
	);
}
