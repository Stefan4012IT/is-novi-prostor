import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the plugin once at the shared entry point used by every mobile
// section. Individual components may register it too, but this guarantees that
// refreshes and newly created triggers always use the same GSAP instance.
gsap.registerPlugin(ScrollTrigger);

let frameId;
let updateFrameId;

export function scheduleScrollTriggerRefresh() {
  if (frameId) cancelAnimationFrame(frameId);

  frameId = requestAnimationFrame(() => {
    frameId = undefined;
    ScrollTrigger.refresh();
    ScrollTrigger.update();
  });
}

export function scheduleScrollTriggerUpdate() {
  if (updateFrameId) return;

  updateFrameId = requestAnimationFrame(() => {
    updateFrameId = undefined;
    ScrollTrigger.update();
  });
}
