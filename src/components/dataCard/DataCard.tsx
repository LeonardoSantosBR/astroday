import { getDataInfo } from "@/helpers";
import { Text, View } from "react-native";

export function DataCard(): React.JSX.Element {
  const data = getDataInfo();

  return (
    <View className="w-32 h-10 p-1 bg-primary rounded-3xl flex items-center justify-center">
      <Text className="text-white font-bold">
        {data.day} {data.monthShort} {data.year}
      </Text>
    </View>
  );
}
