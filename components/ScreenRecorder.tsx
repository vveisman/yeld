"use client";
import React, { MutableRefObject, useRef, useState } from "react";
const ScreenRecorder = () => {
  /* Create a reference to the video element,  
    which helps in storing continous video stream  
    irespective of multiple renders. */
  const screenRecording: MutableRefObject<any> = useRef(null);

  const [Recorder, setRecorder] = useState<null | MediaRecorder>(null);
  const [displayMedia, setDisplayMedia] = useState<null | MediaStreamTrack>(
    null
  );
  const startScreenRecording = async () => {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      audio: true,
      video: true,
    });
    const recorder = new MediaRecorder(stream);
    setRecorder(recorder);
    setDisplayMedia(stream.getVideoTracks()[0]);
    const screenRecordingChunks: any[] = [];
    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
        screenRecordingChunks.push(e.data);
      }
    };
    recorder.onstop = () => {
      //onstop event of media recorder
      const blob = new Blob(screenRecordingChunks, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      screenRecording.current.src = url;
      if (displayMedia) {
        displayMedia.stop();
      }
    };
    //Start the recording.
    recorder.start();
  };
  // Style the Button
  const ButtonStyle = {
    backgroundColor: "green",
    color: "white",
    fontSize: "2em",
  };

  return (
    <>
      <button style={ButtonStyle} onClick={() => startScreenRecording()}>
        Start Recording
      </button>
      <button
        style={ButtonStyle}
        onClick={() => {
          Recorder && Recorder.stop();
        }}
      >
        Stop Recording
      </button>
      <br />
      <br />
      <br />
      <video ref={screenRecording} height={300} width={600} controls />
    </>
  );
};
export default ScreenRecorder;
