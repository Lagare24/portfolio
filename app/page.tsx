import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "3em", color: "#333", marginBottom: "10px" }}>
        Home
      </h1>
      <p style={{ fontSize: "1.2em", color: "#666", marginBottom: "20px" }}>
        Welcome to my portfolio website!
      </p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        width={400}
        height={400}
        src={"https://placehold.co/400"}
        alt="Placeholder Image"
        style={{ marginBottom: "20px" }}
      />
      {children}
    </div>
  );
}
