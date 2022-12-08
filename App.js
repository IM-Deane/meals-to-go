import { useState } from "react";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, StatusBar, Text, View, SafeAreaView } from "react-native";

import { Searchbar } from "react-native-paper";

export default function App() {
	// searchbar state
	const [searchQuery, setSearchQuery] = useState("");

	// searchbar onchange handler
	const onChangeSearch = (query) => setSearchQuery(query);
	return (
		<>
			<SafeAreaView style={styles.container}>
				<View style={styles.search}>
					<Searchbar
						placeholder="Search"
						onChangeText={onChangeSearch}
						value={searchQuery}
					/>
				</View>
				<View style={styles.list}>
					<Text>list</Text>
				</View>
			</SafeAreaView>
			<ExpoStatusBar style="auto" />
		</>
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, marginTop: StatusBar.currentHeight },
	search: { backgroundColor: "green", padding: 16 },
	list: { flex: 1, backgroundColor: "blue", padding: 16 },
});
