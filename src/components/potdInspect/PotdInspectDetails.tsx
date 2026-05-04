import { potdDataType } from "@/types";
import { Text, View } from "react-native";
import { PotdInspectMediaPreview } from "./PotdInspectMediaPreview";

export default function PotdInspectDetails(data: potdDataType): React.JSX.Element {
  return (
    <View className="px-4 pb-8 gap-3">
      <PotdInspectMediaPreview url={data?.url} media_type={data?.media_type} />
      <View className="gap-1">
        <Text className="text-text-primary font-bold text-xl leading-snug">
          {data?.title}
        </Text>
        {data?.copyright && (
          <Text className="text-text-tertiary text-sm">
            ©{data.copyright}
          </Text>
        )}
        <Text className="text-text-secondary text-lg">
          {data?.explanation}
        </Text>
      </View>
    </View>
  );
}
