import React from "react";

export default function VideoPlayerModal({ open, onClose }) {
  if (!open) return null;

  return (
    <>
      <div
        className="video-player-overlay"
        onClick={onClose}
        tabIndex={-1}
        aria-hidden="true"
      />
      <div className="video-player-modal" role="dialog" aria-modal="true">
        <button
          onClick={onClose}
          className="video-player-close-btn"
          aria-label="Close video player"
          tabIndex={0}
          style={{
            position: "absolute",
            top: "14px",
            right: "24px",
            fontSize: "2.2rem",
            color: "#444",
            background: "rgba(255,255,255,0.72)",
            border: "none",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 100,
            boxShadow: "0 2px 8px 0 rgba(0,0,0,0.12)"
          }}
        >
          &times;
        </button>
        <video
          controls
          className="video-player-video"
          style={{ outline: "none" }}
          poster="https://dummyimage.com/600x360/ddd/aaa.png&text=Demo+Video"
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}
