import { View } from "react-native";
import { DataCard } from "../dataCard";

export function ImageOfDay(): React.JSX.Element {
  return (
    <View className="h-3/6 p-4">
      <View className="h-full p-6 bg-imageDay-card rounded-3xl overflow-hidden">
        <DataCard />
      </View>
    </View>
  );
}
