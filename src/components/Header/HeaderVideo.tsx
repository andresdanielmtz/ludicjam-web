import { ReactNode } from "react";
import Video from "react-video-renderer";
import HeaderVideo from "../../assets/LudicWebLandingVideo.mov";

const ErrorWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

const VideoHeader = () => {
  return (
    <Video src={HeaderVideo} autoPlay={true}>
      {(video, state) => {
        if (state.status === "errored") {
          return <ErrorWrapper>Error</ErrorWrapper>;
        }
        return <div>{video}</div>;
      }}
    </Video>
  );
};

export default VideoHeader;
