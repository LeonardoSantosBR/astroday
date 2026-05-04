import PotdInspectDetails from "@/components/potdInspect/PotdInspectDetails";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export default function PotdInspect(): React.JSX.Element {
  const router = useRouter();
  const { url, title, copyright, explanation, media_type } =
    useLocalSearchParams<{
      url: string;
      title: string;
      copyright: string;
      explanation: string;
      media_type: string;
    }>();

  return (
    <View className="flex-1 content-center p-10">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mt-10">
          <PotdInspectDetails
            url={url}
            title={title}
            copyright={copyright}
            explanation={explanation}
            media_type={media_type as "image" | "video"}
          />
          <Pressable
            onPress={() => router.back()}
            className="rounded-2xl overflow-hidden mt-4"
          >
            {({ pressed }) => (
              <View
                className={`items-center py-4 bg-[#671766] ${pressed ? "opacity-70" : "opacity-100"}`}
              >
                <Text className="text-white font-semibold text-base">
                  Voltar
                </Text>
              </View>
            )}
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
