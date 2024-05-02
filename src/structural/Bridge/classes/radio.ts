import { DeviceImplementation } from "../interfaces/device-implementation";

export class Radio implements DeviceImplementation {
  private name = "Radio";
  private volume = 10;
  private power = false;

  getName(): string {
    return this.name;
  }

  setPower(powerStatus: boolean): void {
    this.power = powerStatus;
  }
  getPower(): boolean {
    return this.power;
  }

  setVolume(volume: number): void {
    if (volume > 100) return;
    if (volume < 0) return;
    this.volume = volume;
  }
  getVolume(): number {
    return this.volume;
  }
}
