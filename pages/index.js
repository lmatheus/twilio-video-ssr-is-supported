import { isSupported } from "twilio-video";

export default function Home() {
  if (isSupported) {
    return <p>Device supported</p>;
  }
  return <p>Device not supported</p>;
}
