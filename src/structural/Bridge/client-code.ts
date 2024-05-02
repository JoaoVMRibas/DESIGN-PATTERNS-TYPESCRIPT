import { Radio } from "./classes/radio";
import { RemoteControl } from "./classes/remote-control";
import { RemoteControlWithVolume } from "./classes/remote-control-with-volume";
import { TV } from "./classes/tv";

export function clientCode(
  abstraction: RemoteControl | RemoteControlWithVolume,
): void {
  abstraction.togglePower(); // true

  //Type Guard
  if (!("volumeUp" in abstraction)) return;
  abstraction.volumeUp(); //20
  abstraction.volumeUp(); //30
  abstraction.volumeDown(); //20
}

const tv = new TV();
const tvRemoteControl = new RemoteControlWithVolume(tv);
clientCode(tvRemoteControl);

const radio = new Radio();
const radioRemoteControl = new RemoteControl(radio);
clientCode(radioRemoteControl);
