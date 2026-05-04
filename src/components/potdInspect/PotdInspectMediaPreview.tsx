import { potdDataType } from "@/types";
import { useVideoPlayer, VideoView } from "expo-video";
import { Dimensions, Image } from "react-native";

const imageHeight = Dimensions.get("window").height * 0.6;

export function PotdInspectMediaPreview({
  url,
  media_type,
}: Pick<potdDataType, "url" | "media_type">): React.JSX.Element {
  const player = useVideoPlayer(media_type === "video" ? url : null, (p) => {
    p.loop = true;
    p.muted = true;
    p.play();
  });

  if (media_type === "video") {
    return (
      <VideoView
        player={player}
        style={{ height: 408, width: "100%", borderRadius: 16 }}
        nativeControls={false}
        contentFit="cover"
        fullscreenOptions={{ enable: true }}
      />
    );
  }
  return (
    <Image
      source={{ uri: url }}
      style={{ height: imageHeight, width: "100%", borderRadius: 16 }}
      className="bg-potd-image"
      resizeMode="cover"
    />
  );
}
